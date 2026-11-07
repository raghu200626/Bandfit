const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PROFILES_FILE = path.join(__dirname, 'profiles.json');

app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Ensure profiles.json exists
if (!fs.existsSync(PROFILES_FILE)) {
    fs.writeFileSync(PROFILES_FILE, JSON.stringify({}));
}

// Get all saved profile names
app.get('/api/profiles', (req, res) => {
    fs.readFile(PROFILES_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read profiles' });
        }
        try {
            const profiles = JSON.parse(data);
            res.json(Object.keys(profiles));
        } catch (e) {
            res.status(500).json({ error: 'Failed to parse profiles' });
        }
    });
});

// Get a specific profile by name
app.get('/api/profile/:name', (req, res) => {
    const { name } = req.params;
    fs.readFile(PROFILES_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read profiles' });
        }
        try {
            const profiles = JSON.parse(data);
            if (profiles[name]) {
                res.json(profiles[name]);
            } else {
                res.status(404).json({ error: 'Profile not found' });
            }
        } catch (e) {
            res.status(500).json({ error: 'Failed to parse profiles' });
        }
    });
});

// Save or update a profile
app.post('/api/profile', (req, res) => {
    const { name, userStats } = req.body;
    
    if (!name || !userStats) {
        return res.status(400).json({ error: 'Name and userStats are required' });
    }

    fs.readFile(PROFILES_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read profiles' });
        }
        
        try {
            const profiles = JSON.parse(data);
            profiles[name] = userStats;
            
            fs.writeFile(PROFILES_FILE, JSON.stringify(profiles, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to save profile' });
                }
                res.json({ success: true, message: 'Profile saved successfully' });
            });
        } catch (e) {
            res.status(500).json({ error: 'Failed to parse profiles' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
