// ============================================================
// DATA
// ============================================================
const EXERCISES = [
    {
        id: 'bicep-curl', name: 'Bicep Curl', cat: 'arms', emoji: '💪',
        sets: '3', reps: '12-15', rest: '60s',
        muscles: 'Biceps, Forearms',
        steps: [
            { title: 'Setup', text: 'Stand on the middle of the resistance band, feet shoulder-width apart. Hold one end in each hand, palms facing forward.' },
            { title: 'Starting Position', text: 'Arms fully extended, elbows close to your body. Keep your shoulders relaxed and core engaged.' },
            { title: 'Curl Up', text: 'Slowly curl your hands toward your shoulders, squeezing your biceps at the top. Exhale as you lift.' },
            { title: 'Lower Down', text: 'Slowly lower back to the start. This eccentric phase is crucial — take 3 seconds going down.' }
        ],
        tips: '🎯 Tip: Keep your elbows fixed at your sides. Avoid swinging your back. Use a thicker band to increase resistance.',
        svg: drawBicepCurl
    },
    {
        id: 'squat', name: 'Band Squat', cat: 'legs', emoji: '🦵',
        sets: '4', reps: '15-20', rest: '60s',
        muscles: 'Quads, Glutes, Hamstrings',
        steps: [
            { title: 'Setup', text: 'Stand on the band with feet shoulder-width apart. Hold the band at shoulder height, elbows bent and pointing forward.' },
            { title: 'Starting Position', text: 'Stand tall, chest up, core braced. The band should have slight tension even at the top.' },
            { title: 'Squat Down', text: 'Push hips back and bend knees, lowering until thighs are parallel to the ground (or lower). Knees track over toes.' },
            { title: 'Drive Up', text: 'Press through your heels to return to standing. Squeeze glutes at the top. Exhale as you rise.' }
        ],
        tips: '🎯 Tip: Keep weight in your heels, not your toes. If you can wiggle your toes, you\'re doing it right!',
        svg: drawSquat
    },
    {
        id: 'chest-press', name: 'Chest Press', cat: 'chest', emoji: '🏋️',
        sets: '3', reps: '10-12', rest: '75s',
        muscles: 'Chest, Triceps, Anterior Deltoids',
        steps: [
            { title: 'Setup', text: 'Anchor the band behind you at chest height (wrap around a pole or hold with bent arms behind). Stand facing away, holding band handles at chest level.' },
            { title: 'Starting Position', text: 'Stand in a staggered stance for balance. Band should be taut at the starting position with elbows at 90°.' },
            { title: 'Press Forward', text: 'Push both hands straight forward until arms are nearly fully extended. Squeeze chest muscles at full extension.' },
            { title: 'Return', text: 'Slowly bring hands back to chest level. Resist the pull of the band — this negative phase builds strength.' }
        ],
        tips: '🎯 Tip: Lean slightly forward to keep tension on the chest. The further you step from the anchor, the harder it gets.',
        svg: drawChestPress
    },
    {
        id: 'lat-pulldown', name: 'Lat Pulldown', cat: 'back', emoji: '🔙',
        sets: '3', reps: '12-15', rest: '75s',
        muscles: 'Lats, Rhomboids, Biceps',
        steps: [
            { title: 'Setup', text: 'Anchor the band overhead (to a door pull-up bar or sturdy hook). Kneel or sit beneath it. Grip the band with both hands, wider than shoulder-width.' },
            { title: 'Starting Position', text: 'Arms fully extended overhead. Lean back slightly (about 15°). Engage your core.' },
            { title: 'Pull Down', text: 'Pull the band down toward your upper chest, driving elbows down and back. Squeeze shoulder blades together at the bottom.' },
            { title: 'Return', text: 'Slowly let the band pull your arms back up, maintaining control. Avoid shrugging your shoulders.' }
        ],
        tips: '🎯 Tip: Imagine you\'re trying to put your elbows in your back pockets. This cue activates the lats perfectly.',
        svg: drawLatPulldown
    },
    {
        id: 'shoulder-press', name: 'Shoulder Press', cat: 'shoulders', emoji: '🤸',
        sets: '3', reps: '10-12', rest: '60s',
        muscles: 'Deltoids, Triceps, Trapezius',
        steps: [
            { title: 'Setup', text: 'Stand on the band, feet shoulder-width apart. Hold the band at shoulder height with palms facing forward, elbows at 90°.' },
            { title: 'Starting Position', text: 'Band at shoulder level, elbows slightly in front of your body. Core tight, do not arch your lower back.' },
            { title: 'Press Up', text: 'Press hands overhead until arms are nearly straight. Do not lock out elbows. Exhale on the way up.' },
            { title: 'Lower Down', text: 'Slowly bring hands back to shoulder level. Control the descent — 2-3 seconds down.' }
        ],
        tips: '🎯 Tip: Keep your ribs down — don\'t flare them out. If you feel it in your lower back, reduce the weight.',
        svg: drawShoulderPress
    },
    {
        id: 'deadlift', name: 'Band Deadlift', cat: 'back', emoji: '🏗️',
        sets: '3', reps: '12-15', rest: '90s',
        muscles: 'Lower Back, Glutes, Hamstrings',
        steps: [
            { title: 'Setup', text: 'Stand on the band, feet hip-width apart. Hold the band with both hands (or handles), knees slightly bent.' },
            { title: 'Starting Position', text: 'Hinge at the hips, flat back, chest up. Arms hanging straight down. Band should be taut.' },
            { title: 'Drive Up', text: 'Push through your heels and drive your hips forward, pulling the band up as you stand. Keep back flat throughout.' },
            { title: 'Hinge Back Down', text: 'Hinge at the hips first, then bend knees to lower the band back to shin level. Control the movement.' }
        ],
        tips: '🎯 Tip: Think "push the floor away" not "pull the band up." This protects your lower back.',
        svg: drawDeadlift
    },
    {
        id: 'tricep-extension', name: 'Tricep Extension', cat: 'arms', emoji: '💢',
        sets: '3', reps: '12-15', rest: '60s',
        muscles: 'Triceps (all 3 heads)',
        steps: [
            { title: 'Setup', text: 'Anchor the band overhead or step on it. Hold the band behind your head with both hands (or one hand), elbows bent and pointing up.' },
            { title: 'Starting Position', text: 'Upper arms perpendicular to the floor, elbows close to your head. Keep core tight.' },
            { title: 'Extend', text: 'Press hands upward and forward, straightening your arms. Contract triceps fully at the top.' },
            { title: 'Return', text: 'Slowly lower hands back behind your head. Elbows should not flare out.' }
        ],
        tips: '🎯 Tip: Keep elbows pointed forward, not out to the sides. This isolates the triceps much more effectively.',
        svg: drawTricep
    },
    {
        id: 'glute-bridge', name: 'Glute Bridge', cat: 'legs', emoji: '🍑',
        sets: '3', reps: '15-20', rest: '45s',
        muscles: 'Glutes, Hamstrings, Core',
        steps: [
            { title: 'Setup', text: 'Lie on your back, knees bent, feet flat on floor. Place the band across your hips and hold both ends down.' },
            { title: 'Starting Position', text: 'Feet hip-width apart, shoulder blades on the floor, arms pressing band down at your sides.' },
            { title: 'Bridge Up', text: 'Press through your heels and lift your hips toward the ceiling. Squeeze glutes hard at the top. Hold 2 seconds.' },
            { title: 'Lower', text: 'Slowly lower hips back to just above the floor. Don\'t let them touch — keep tension throughout.' }
        ],
        tips: '🎯 Tip: Push your knees outward (against the band if it\'s across knees) to maximise glute activation.',
        svg: drawGluteBridge
    },
    {
        id: 'face-pull', name: 'Face Pull', cat: 'shoulders', emoji: '🎯',
        sets: '3', reps: '15-20', rest: '45s',
        muscles: 'Rear Deltoids, Rotator Cuff, Rhomboids',
        steps: [
            { title: 'Setup', text: 'Anchor the band at face height. Grip with both hands, palms facing each other or down. Step back until band is taut.' },
            { title: 'Starting Position', text: 'Arms extended forward, band at eye level. Stand upright, core engaged.' },
            { title: 'Pull to Face', text: 'Pull the band toward your face, separating hands wide. Elbows should flare out to the sides at shoulder height.' },
            { title: 'Return', text: 'Slowly let the band pull your arms back to start. This should feel like you\'re spreading something apart.' }
        ],
        tips: '🎯 Tip: This is one of the best shoulder health exercises. Do it every session. Keep elbows at shoulder height throughout.',
        svg: drawFacePull
    },
    {
        id: 'plank-row', name: 'Plank Band Row', cat: 'core', emoji: '🧱',
        sets: '3', reps: '10 each side', rest: '60s',
        muscles: 'Core, Lats, Biceps, Rotator Cuff',
        steps: [
            { title: 'Setup', text: 'Anchor a band low, in front of you. Get into a high plank position. Hold the band with one hand.' },
            { title: 'Starting Position', text: 'Plank position with feet wide for stability. Core and glutes braced. Non-rowing hand on the floor.' },
            { title: 'Row', text: 'Pull the band toward your hip, rowing with one arm while keeping your hips perfectly square (don\'t rotate!).' },
            { title: 'Return & Switch', text: 'Slowly extend arm back. Complete all reps, then switch sides. Quality over speed.' }
        ],
        tips: '🎯 Tip: Your hips must stay level — if they rotate, the core isn\'t working. Slow down the movement.',
        svg: drawPlankRow
    },
    {
        id: 'band-pull-apart', name: 'Band Pull Apart', cat: 'chest', emoji: '↔️',
        sets: '3', reps: '20', rest: '30s',
        muscles: 'Rear Deltoids, Rhomboids, Chest (stretch)',
        steps: [
            { title: 'Setup', text: 'Hold the band in both hands in front of you, shoulder-width apart, arms at chest height.' },
            { title: 'Starting Position', text: 'Arms extended forward, slight tension on the band. Palms down, thumbs pointing away.' },
            { title: 'Pull Apart', text: 'Pull the band apart, moving both hands to your sides. Squeeze shoulder blades together fully.' },
            { title: 'Return', text: 'Slowly bring hands back together. This should be smooth and controlled — no snapping.' }
        ],
        tips: '🎯 Tip: Do these as a warm-up and between sets of pressing. They counteract the forward shoulder position from daily life.',
        svg: drawPullApart
    },
    {
        id: 'standing-row', name: 'Standing Row', cat: 'back', emoji: '🚣',
        sets: '3', reps: '12-15', rest: '60s',
        muscles: 'Rhomboids, Traps, Rear Delts, Biceps',
        steps: [
            { title: 'Setup', text: 'Anchor band at stomach height. Hold both ends or handles, step back until band is taut.' },
            { title: 'Starting Position', text: 'Stand straight, arms extended forward, slight bend in knees. Palms facing each other.' },
            { title: 'Row', text: 'Pull band toward your belly button, driving elbows back. Squeeze shoulder blades together hard at the end.' },
            { title: 'Return', text: 'Slowly extend arms forward. Keep upper body still — only arms should move.' }
        ],
        tips: '🎯 Tip: Don\'t let your lower back arch. The squeeze at the end is everything — hold it for a second.',
        svg: drawStandingRow
    }
];

// ============================================================
// FOOD DATABASE (Indian + International + Junk)
// ============================================================
const FOOD_DB = [
    // BREAKFAST
    { name: 'Idli (1 piece)', cat: 'breakfast', cal: 39, protein: 2, carb: 8, fat: 0.2 },
    { name: 'Dosa (plain)', cat: 'breakfast', cal: 133, protein: 3, carb: 25, fat: 2.7 },
    { name: 'Masala Dosa', cat: 'breakfast', cal: 230, protein: 5, carb: 40, fat: 6 },
    { name: 'Oats (cooked, 100g)', cat: 'breakfast', cal: 71, protein: 2.5, carb: 12, fat: 1.4 },
    { name: 'Oats with Milk (200ml)', cat: 'breakfast', cal: 193, protein: 8, carb: 28, fat: 4.5 },
    { name: 'Chapati / Roti (1 piece)', cat: 'breakfast', cal: 104, protein: 3.1, carb: 18, fat: 2.5 },
    { name: 'Paratha (plain)', cat: 'breakfast', cal: 180, protein: 4, carb: 28, fat: 6 },
    { name: 'Aloo Paratha', cat: 'breakfast', cal: 260, protein: 5, carb: 38, fat: 9 },
    { name: 'Upma (100g)', cat: 'breakfast', cal: 150, protein: 4, carb: 25, fat: 4 },
    { name: 'Poha (100g)', cat: 'breakfast', cal: 130, protein: 3, carb: 25, fat: 2 },
    { name: 'Pongal (100g)', cat: 'breakfast', cal: 160, protein: 5, carb: 28, fat: 4 },
    { name: 'Vada (1 piece)', cat: 'breakfast', cal: 110, protein: 3, carb: 12, fat: 5.5 },
    { name: 'Medu Vada', cat: 'breakfast', cal: 130, protein: 4, carb: 14, fat: 7 },
    { name: 'Bread (white, 1 slice)', cat: 'breakfast', cal: 79, protein: 2.7, carb: 15, fat: 1 },
    { name: 'Bread (brown/wheat, 1 slice)', cat: 'breakfast', cal: 69, protein: 3.5, carb: 12, fat: 1.2 },
    { name: 'Egg (boiled, 1)', cat: 'breakfast', cal: 78, protein: 6.3, carb: 0.6, fat: 5.3 },
    { name: 'Omelette (2 eggs)', cat: 'breakfast', cal: 190, protein: 13, carb: 1, fat: 14 },
    { name: 'Banana (1 medium)', cat: 'breakfast', cal: 89, protein: 1.1, carb: 23, fat: 0.3 },
    { name: 'Milk (full fat, 200ml)', cat: 'breakfast', cal: 136, protein: 6.4, carb: 9.6, fat: 8 },
    { name: 'Curd / Dahi (100g)', cat: 'breakfast', cal: 98, protein: 11, carb: 3.4, fat: 4.3 },

    // LUNCH / DINNER
    { name: 'Rice (cooked, 100g)', cat: 'lunch', cal: 130, protein: 2.7, carb: 28, fat: 0.3 },
    { name: 'Basmati Rice (cooked, 100g)', cat: 'lunch', cal: 140, protein: 3, carb: 30, fat: 0.4 },
    { name: 'Dal (mixed, 100g)', cat: 'lunch', cal: 120, protein: 8, carb: 18, fat: 2 },
    { name: 'Dal Tadka (100g)', cat: 'lunch', cal: 135, protein: 7, carb: 18, fat: 4 },
    { name: 'Sambar (100g)', cat: 'lunch', cal: 70, protein: 3, carb: 10, fat: 1.5 },
    { name: 'Chicken Curry (100g)', cat: 'lunch', cal: 200, protein: 20, carb: 5, fat: 11 },
    { name: 'Chicken Biryani (250g)', cat: 'lunch', cal: 465, protein: 28, carb: 55, fat: 14 },
    { name: 'Mutton Curry (100g)', cat: 'lunch', cal: 230, protein: 18, carb: 3, fat: 16 },
    { name: 'Rajma (100g cooked)', cat: 'lunch', cal: 127, protein: 8, carb: 22, fat: 0.5 },
    { name: 'Chole/Chickpeas (100g cooked)', cat: 'lunch', cal: 164, protein: 8.9, carb: 27, fat: 2.6 },
    { name: 'Paneer Curry (100g)', cat: 'lunch', cal: 260, protein: 14, carb: 6, fat: 20 },
    { name: 'Sabzi / Mixed Veg (100g)', cat: 'lunch', cal: 85, protein: 2, carb: 12, fat: 3 },
    { name: 'Rasam (100ml)', cat: 'lunch', cal: 45, protein: 1, carb: 8, fat: 1 },
    { name: 'Fish Curry (100g)', cat: 'lunch', cal: 170, protein: 18, carb: 5, fat: 9 },
    { name: 'Egg Curry (1 egg+gravy)', cat: 'lunch', cal: 165, protein: 9, carb: 6, fat: 12 },
    { name: 'Jeera Rice (100g)', cat: 'lunch', cal: 148, protein: 3, carb: 30, fat: 2 },
    { name: 'Pulao (100g)', cat: 'lunch', cal: 160, protein: 4, carb: 28, fat: 4 },
    { name: 'Palak Paneer (100g)', cat: 'lunch', cal: 210, protein: 10, carb: 7, fat: 16 },
    { name: 'Bhindi Masala (100g)', cat: 'lunch', cal: 90, protein: 2.5, carb: 10, fat: 4 },
    { name: 'Aloo Gobi (100g)', cat: 'lunch', cal: 110, protein: 3, carb: 15, fat: 4 },

    // SNACKS
    { name: 'Peanuts (50g)', cat: 'snacks', cal: 285, protein: 13, carb: 8, fat: 24 },
    { name: 'Chana Chaat (100g)', cat: 'snacks', cal: 180, protein: 9, carb: 28, fat: 3 },
    { name: 'Bhel Puri (100g)', cat: 'snacks', cal: 175, protein: 4, carb: 30, fat: 4 },
    { name: 'Samosa (1 piece)', cat: 'snacks', cal: 262, protein: 4, carb: 33, fat: 13 },
    { name: 'Pakoda (100g)', cat: 'snacks', cal: 265, protein: 6, carb: 28, fat: 14 },
    { name: 'Murukku (50g)', cat: 'snacks', cal: 230, protein: 4, carb: 32, fat: 10 },
    { name: 'Roasted Chana (50g)', cat: 'snacks', cal: 185, protein: 11, carb: 26, fat: 3 },
    { name: 'Banana Chips (50g)', cat: 'snacks', cal: 270, protein: 1, carb: 32, fat: 15 },
    { name: 'Groundnut Chikki (50g)', cat: 'snacks', cal: 255, protein: 7, carb: 28, fat: 13 },
    { name: 'Sprouts Salad (100g)', cat: 'snacks', cal: 55, protein: 4, carb: 8, fat: 0.5 },

    // JUNK FOOD
    { name: 'Burger (McDonald\'s style)', cat: 'junk', cal: 490, protein: 25, carb: 45, fat: 25 },
    { name: 'Pizza (1 slice, regular)', cat: 'junk', cal: 285, protein: 12, carb: 36, fat: 10 },
    { name: 'French Fries (medium)', cat: 'junk', cal: 365, protein: 4, carb: 48, fat: 17 },
    { name: 'Vada Pav', cat: 'junk', cal: 290, protein: 6, carb: 42, fat: 10 },
    { name: 'Pav Bhaji (1 serving)', cat: 'junk', cal: 350, protein: 7, carb: 52, fat: 12 },
    { name: 'Dahi Puri (6 pcs)', cat: 'junk', cal: 250, protein: 5, carb: 35, fat: 8 },
    { name: 'Noodles/Maggi (1 pack)', cat: 'junk', cal: 350, protein: 7, carb: 50, fat: 13 },
    { name: 'Chips (Lays, 30g)', cat: 'junk', cal: 160, protein: 2, carb: 15, fat: 10 },
    { name: 'Chocolate (Dairy Milk 50g)', cat: 'junk', cal: 265, protein: 3.5, carb: 29, fat: 15 },
    { name: 'Ice Cream (1 scoop 100g)', cat: 'junk', cal: 207, protein: 3.5, carb: 24, fat: 11 },
    { name: 'Fried Chicken (1 piece)', cat: 'junk', cal: 320, protein: 22, carb: 12, fat: 20 },
    { name: 'Hot Dog', cat: 'junk', cal: 290, protein: 10, carb: 23, fat: 17 },
    { name: 'Pani Puri (6 pcs)', cat: 'junk', cal: 130, protein: 3, carb: 22, fat: 3 },
    { name: 'Kachori (1 piece)', cat: 'junk', cal: 240, protein: 4, carb: 28, fat: 12 },

    // DRINKS
    { name: 'Chai / Tea with milk (200ml)', cat: 'drinks', cal: 60, protein: 2, carb: 8, fat: 2 },
    { name: 'Coffee with milk (200ml)', cat: 'drinks', cal: 70, protein: 3, carb: 7, fat: 3 },
    { name: 'Lassi (sweet, 200ml)', cat: 'drinks', cal: 165, protein: 6, carb: 24, fat: 5 },
    { name: 'Buttermilk (200ml)', cat: 'drinks', cal: 45, protein: 3, carb: 4, fat: 1.5 },
    { name: 'Coconut Water (200ml)', cat: 'drinks', cal: 44, protein: 1.7, carb: 8.9, fat: 0.5 },
    { name: 'Orange Juice (200ml)', cat: 'drinks', cal: 88, protein: 1.4, carb: 20, fat: 0.4 },
    { name: 'Mango Juice (200ml)', cat: 'drinks', cal: 120, protein: 1, carb: 29, fat: 0.3 },
    { name: 'Coca-Cola (300ml)', cat: 'drinks', cal: 126, protein: 0, carb: 34, fat: 0 },
    { name: 'Protein Shake (1 scoop+water)', cat: 'drinks', cal: 120, protein: 24, carb: 4, fat: 1.5 },
    { name: 'Sports Drink (500ml)', cat: 'drinks', cal: 150, protein: 0, carb: 38, fat: 0 },

    // PROTEIN FOODS
    { name: 'Chicken Breast (100g, grilled)', cat: 'protein', cal: 165, protein: 31, carb: 0, fat: 3.6 },
    { name: 'Eggs (2 boiled)', cat: 'protein', cal: 156, protein: 12.6, carb: 1.2, fat: 10.6 },
    { name: 'Paneer (100g)', cat: 'protein', cal: 265, protein: 18, carb: 3.6, fat: 20 },
    { name: 'Tuna (canned, 100g)', cat: 'protein', cal: 109, protein: 24, carb: 0, fat: 1 },
    { name: 'Salmon (100g)', cat: 'protein', cal: 208, protein: 20, carb: 0, fat: 13 },
    { name: 'Whey Protein (30g)', cat: 'protein', cal: 120, protein: 24, carb: 4, fat: 1.5 },
    { name: 'Moong Dal (100g cooked)', cat: 'protein', cal: 105, protein: 7.6, carb: 17, fat: 0.8 },
    { name: 'Soybean (100g cooked)', cat: 'protein', cal: 173, protein: 17, carb: 10, fat: 9 },
    { name: 'Almonds (30g)', cat: 'protein', cal: 174, protein: 6.3, carb: 6, fat: 15 },
    { name: 'Greek Yogurt (100g)', cat: 'protein', cal: 59, protein: 10, carb: 3.6, fat: 0.4 },
];

// ============================================================
// STATE
// ============================================================
let userStats = null;
let foodLog = [];
let selectedFood = null;
let currentFoodCat = 'all';

// ============================================================
// NAV
// ============================================================
function showPage(id) {
    if (id !== 'exercises') {
        stopExpandedAnimation();
        Object.keys(activeCardAnims).forEach(exId => stopCardAnimation(exId));
    }
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    const idx = ['dashboard', 'workout', 'exercises', 'kcal'].indexOf(id);
    document.querySelectorAll('.nav-tab')[idx].classList.add('active');
    if (id === 'exercises') renderExerciseGrid('all');
    if (id === 'kcal') renderQuickAdd('all');
}

// ============================================================
// CALCULATIONS
// ============================================================
function calculateAll() {
    const weight = +document.getElementById('weight').value;
    const height = +document.getElementById('height').value;
    const age = +document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const gain = +document.getElementById('gain').value;
    const act = +document.getElementById('activity').value;
    const weeks = +document.getElementById('timeline').value;

    if (!weight || !height || !age || !gain) {
        alert('Please fill in all fields!');
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    // BMR using Mifflin-St Jeor
    const bmr = gender === 'male'
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * act;
    // Surplus: 7700 kcal ≈ 1 kg fat; 0.5 kg/week surplus max
    const weeklyGainRate = Math.min(0.5, gain / weeks);
    const surplusDailyKcal = weeklyGainRate * 7700 / 7;
    const targetCal = Math.round(tdee + surplusDailyKcal);

    // Macros: protein = 2.2g/kg bodyweight, fat = 25% of calories, carbs = rest
    const protein = Math.round(2.2 * weight);
    const fat = Math.round((targetCal * 0.25) / 9);
    const carbs = Math.round((targetCal - protein * 4 - fat * 9) / 4);

    userStats = { weight, height, age, gender, gain, weeks, activity: act, bmi, bmr, tdee, targetCal, protein, fat, carbs, surplusDailyKcal };

    renderStats();
    renderMacroBars();
    renderMealPlan();
    renderWorkoutPlan();
    document.getElementById('results-section').style.display = 'block';
    document.getElementById('results-section').classList.add('fade-in');
    document.getElementById('save-profile-btn').style.display = 'inline-block';
}

// ============================================================
// PROFILE API
// ============================================================
async function fetchProfiles() {
    try {
        let profiles = [];
        if (window.Android) {
            const profilesStr = window.Android.getProfiles();
            if (profilesStr) {
                profiles = JSON.parse(profilesStr);
            }
        } else {
            const response = await fetch('http://localhost:3000/api/profiles');
            if (!response.ok) throw new Error('Failed to fetch profiles');
            profiles = await response.json();
        }
        
        const select = document.getElementById('profile-select');
        const card = document.getElementById('saved-profiles-card');
        
        if (profiles.length > 0) {
            card.style.display = 'block';
            select.innerHTML = '<option value="">-- Choose a name --</option>';
            profiles.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                select.appendChild(option);
            });
        }
    } catch (err) {
        console.error(err);
    }
}

async function loadProfile() {
    const name = document.getElementById('profile-select').value;
    if (!name) return alert('Please select a profile to load.');

    try {
        let data = null;
        if (window.Android) {
            const profileStr = window.Android.loadProfile(name);
            if (profileStr) {
                data = JSON.parse(profileStr);
            } else {
                throw new Error('Profile not found on device');
            }
        } else {
            const response = await fetch(`http://localhost:3000/api/profile/${name}`);
            if (!response.ok) throw new Error('Failed to load profile');
            data = await response.json();
        }

        userStats = data;

        // Restore form fields
        document.getElementById('user-name').value = name;
        document.getElementById('weight').value = data.weight;
        document.getElementById('height').value = data.height;
        document.getElementById('age').value = data.age;
        document.getElementById('gender').value = data.gender;
        document.getElementById('gain').value = data.gain;
        document.getElementById('activity').value = data.activity;
        document.getElementById('timeline').value = data.weeks;

        // Render results
        renderStats();
        renderMacroBars();
        renderMealPlan();
        renderWorkoutPlan();
        
        document.getElementById('results-section').style.display = 'block';
        document.getElementById('results-section').classList.add('fade-in');
        document.getElementById('save-profile-btn').style.display = 'inline-block';
        
    } catch (err) {
        console.error(err);
        alert('Could not load profile. Is the backend running?');
    }
}

async function saveProfile() {
    const name = document.getElementById('user-name').value.trim();
    if (!name) return alert('Please enter your Name before saving!');
    if (!userStats) return alert('Please calculate your plan first!');

    try {
        if (window.Android) {
            window.Android.saveProfile(name, JSON.stringify(userStats));
            alert('Profile saved successfully to device!');
        } else {
            const response = await fetch('http://localhost:3000/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, userStats })
            });
            
            if (!response.ok) throw new Error('Failed to save profile');
            const result = await response.json();
            alert(result.message);
        }
        
        // Refresh profile list
        fetchProfiles();
    } catch (err) {
        console.error(err);
        alert('Could not save profile. Is the backend running?');
    }
}

// Fetch profiles on load
document.addEventListener('DOMContentLoaded', fetchProfiles);

function getBmiLabel(bmi) {
    if (bmi < 18.5) return { label: 'Underweight', cls: 'bmi-under' };
    if (bmi < 25) return { label: 'Normal', cls: 'bmi-normal' };
    if (bmi < 30) return { label: 'Overweight', cls: 'bmi-over' };
    return { label: 'Obese', cls: 'bmi-obese' };
}

function renderStats() {
    const s = userStats;
    const bmiInfo = getBmiLabel(s.bmi);
    document.getElementById('stats-row').innerHTML = `
    <div class="stat-card highlight">
      <div class="stat-val">${s.targetCal}</div>
      <div class="stat-label">Daily Calories (kcal)</div>
    </div>
    <div class="stat-card">
      <div class="stat-val">${s.bmi.toFixed(1)}</div>
      <div class="stat-label">BMI <span class="bmi-badge ${bmiInfo.cls}">${bmiInfo.label}</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-val">${Math.round(s.tdee)}</div>
      <div class="stat-label">Maintenance Calories</div>
    </div>
    <div class="stat-card">
      <div class="stat-val">+${Math.round(s.surplusDailyKcal)}</div>
      <div class="stat-label">Daily Surplus</div>
    </div>
    <div class="stat-card">
      <div class="stat-val">${s.protein}g</div>
      <div class="stat-label">Daily Protein</div>
    </div>
    <div class="stat-card">
      <div class="stat-val">${s.weeks}wk</div>
      <div class="stat-label">to reach ${+s.weight + +s.gain}kg</div>
    </div>
  `;
}

function renderMacroBars() {
    const s = userStats;
    const totalCals = s.protein * 4 + s.carbs * 4 + s.fat * 9;
    document.getElementById('macro-bars').innerHTML = `
    <div class="macro-row"><div class="macro-label">🥩 Protein</div><div class="macro-bar-bg"><div class="macro-bar" style="width:${(s.protein * 4 / totalCals * 100).toFixed(0)}%;background:#3B82F6"></div></div><div class="macro-val">${s.protein}g</div></div>
    <div class="macro-row"><div class="macro-label">🍚 Carbs</div><div class="macro-bar-bg"><div class="macro-bar" style="width:${(s.carbs * 4 / totalCals * 100).toFixed(0)}%;background:#F4A261"></div></div><div class="macro-val">${s.carbs}g</div></div>
    <div class="macro-row"><div class="macro-label">🥑 Fat</div><div class="macro-bar-bg"><div class="macro-bar" style="width:${(s.fat * 9 / totalCals * 100).toFixed(0)}%;background:#10B981"></div></div><div class="macro-val">${s.fat}g</div></div>
    <div style="margin-top:12px;font-size:.82rem;color:var(--text-muted)">Total: ${totalCals} kcal | Protein ${(s.protein * 4 / totalCals * 100).toFixed(0)}% | Carbs ${(s.carbs * 4 / totalCals * 100).toFixed(0)}% | Fat ${(s.fat * 9 / totalCals * 100).toFixed(0)}%</div>
  `;
}

function renderMealPlan() {
    const s = userStats;
    // Split calories: B 25%, MS 10%, L 35%, ES 10%, D 20%
    const meals = [
        { name: '🌅 Breakfast', pct: 0.25, items: getBreakfastItems(s) },
        { name: '🍎 Mid-Morning Snack', pct: 0.10, items: getMidMorningItems(s) },
        { name: '☀️ Lunch', pct: 0.35, items: getLunchItems(s) },
        { name: '🕓 Evening Snack', pct: 0.10, items: getEveningItems(s) },
        { name: '🌙 Dinner', pct: 0.20, items: getDinnerItems(s) },
    ];

    let html = '';
    meals.forEach(m => {
        html += `<div class="meal-section">
      <div class="meal-heading">${m.name} <span style="color:var(--text-muted);font-size:.82rem">(~${Math.round(s.targetCal * m.pct)} kcal)</span></div>
      <div class="meal-items">`;
        m.items.forEach(it => {
            html += `<div class="meal-item">
        <div class="meal-item-name">${it.name}</div>
        <div class="meal-item-qty">${it.qty}</div>
        <div class="meal-item-macros">~${it.cal} kcal | P: ${it.prot}g | C: ${it.carb}g | F: ${it.fat}g</div>
      </div>`;
        });
        html += `</div></div><hr class="section-divider">`;
    });
    document.getElementById('meal-plan').innerHTML = html;
}

function getBreakfastItems(s) {
    const base = [
        { name: '🍚 Oats / Chapati (2 pcs)', qty: '2 chapati or 80g oats', cal: 280, prot: 9, carb: 46, fat: 7 },
        { name: '🥚 Boiled Eggs', qty: '2 eggs', cal: 156, prot: 13, carb: 1, fat: 11 },
        { name: '🥛 Full Fat Milk', qty: '200ml', cal: 136, prot: 6, carb: 10, fat: 8 },
    ];
    if (s.protein > 150) base.push({ name: '🫙 Curd / Greek Yogurt', qty: '100g', cal: 98, prot: 11, carb: 3, fat: 4 });
    return base;
}
function getMidMorningItems(s) {
    return [
        { name: '🍌 Banana + Peanuts', qty: '1 banana + 30g peanuts', cal: 261, prot: 7, carb: 30, fat: 13 },
        { name: '🫘 Roasted Chana', qty: '50g', cal: 185, prot: 11, carb: 26, fat: 3 },
    ];
}
function getLunchItems(s) {
    return [
        { name: '🍚 Rice / Roti', qty: '200g rice or 3 rotis', cal: 340, prot: 8, carb: 70, fat: 3 },
        { name: '🫘 Dal', qty: '150ml', cal: 180, prot: 12, carb: 27, fat: 3 },
        { name: '🍗 Chicken / Paneer Curry', qty: '150g', cal: 280, prot: 25, carb: 6, fat: 16 },
        { name: '🥗 Salad + Curd', qty: '1 bowl each', cal: 120, prot: 12, carb: 10, fat: 4 },
    ];
}
function getEveningItems(s) {
    return [
        { name: '☕ Tea + Sprouts / Chana', qty: '1 cup tea + 100g sprouts', cal: 115, prot: 5, carb: 16, fat: 2 },
    ];
}
function getDinnerItems(s) {
    return [
        { name: '🫓 Chapati / Roti', qty: '2-3 pieces', cal: 250, prot: 8, carb: 44, fat: 6 },
        { name: '🥬 Sabzi (Vegetable curry)', qty: '100g', cal: 85, prot: 2, carb: 12, fat: 3 },
        { name: s.protein > 130 ? '🍗 Egg / Chicken' : '🫘 Dal', qty: '150g', cal: 210, prot: 22, carb: 4, fat: 11 },
    ];
}

// ============================================================
// WORKOUT PLAN
// ============================================================
const WORKOUT_PLAN = [
    {
        day: 'Mon', name: 'Monday', focus: 'Chest & Triceps', icon: '💪', rest: false,
        exercises: ['chest-press', 'band-pull-apart', 'tricep-extension', 'shoulder-press', 'face-pull']
    },
    {
        day: 'Tue', name: 'Tuesday', focus: 'Back & Biceps', icon: '🔙', rest: false,
        exercises: ['lat-pulldown', 'standing-row', 'bicep-curl', 'plank-row', 'face-pull']
    },
    {
        day: 'Wed', name: 'Wednesday', focus: 'Legs & Glutes', icon: '🦵', rest: false,
        exercises: ['squat', 'glute-bridge', 'deadlift', 'squat', 'glute-bridge']
    },
    { day: 'Thu', name: 'Thursday', focus: 'Rest & Recovery 🧘', icon: '💤', rest: true, exercises: [] },
    {
        day: 'Fri', name: 'Friday', focus: 'Shoulders & Core', icon: '🤸', rest: false,
        exercises: ['shoulder-press', 'face-pull', 'band-pull-apart', 'plank-row', 'glute-bridge']
    },
    {
        day: 'Sat', name: 'Saturday', focus: 'Full Body Strength', icon: '🏋️', rest: false,
        exercises: ['squat', 'chest-press', 'lat-pulldown', 'deadlift', 'bicep-curl', 'tricep-extension']
    },
    { day: 'Sun', name: 'Sunday', focus: 'Active Rest / Light Cardio', icon: '🚶', rest: true, exercises: [] },
];

function renderWorkoutPlan() {
    const container = document.getElementById('workout-plan-content');
    document.getElementById('workout-not-calc').style.display = 'none';
    container.style.display = 'block';

    let html = `<h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.5rem;margin-bottom:4px">Your 7-Day Plan</h2>
  <p style="color:var(--text-muted);margin-bottom:20px;font-size:.9rem">Click a day to expand. Click an exercise to see how to do it.</p>`;

    WORKOUT_PLAN.forEach((day, i) => {
        const exObjs = day.exercises.map(id => EXERCISES.find(e => e.id === id)).filter(Boolean);
        html += `<div class="day-card">
      <div class="day-header" onclick="toggleDay(${i})">
        <div class="day-badge${day.rest ? ' rest' : ''}">${day.day}</div>
        <div>
          <div class="day-name">${day.name} — ${day.focus}</div>
          ${!day.rest ? `<div class="day-focus">${exObjs.length} exercises · ~45 min</div>` : '<div class="day-focus">Recovery day</div>'}
        </div>
        <div class="day-chevron" id="chev-${i}">▼</div>
      </div>
      <div class="day-body" id="day-body-${i}">`;

        if (day.rest) {
            html += `<div style="color:var(--text-muted);font-size:.9rem;padding-top:8px">🧘 Rest, stretching, light walk (20-30 min), or yoga. Recovery is where growth happens!</div>`;
        } else {
            exObjs.forEach(ex => {
                html += `<div class="exercise-item" onclick="openExercise('${ex.id}')">
          <div class="ex-icon">${ex.emoji}</div>
          <div class="ex-info">
            <div class="ex-name">${ex.name}</div>
            <div class="ex-detail">${ex.sets} sets × ${ex.reps} reps · ${ex.rest} rest · ${ex.muscles}</div>
          </div>
          <div class="ex-view">▶ How to</div>
        </div>`;
            });
        }
        html += `</div></div>`;
    });

    container.innerHTML = html;
}

function toggleDay(i) {
    const body = document.getElementById('day-body-' + i);
    const chev = document.getElementById('chev-' + i);
    body.classList.toggle('open');
    chev.textContent = body.classList.contains('open') ? '▲' : '▼';
}

// ============================================================
// EXERCISE LIBRARY
// ============================================================
// ============================================================
// EXERCISE LIBRARY & ARTICULATED KINEMATICS ENGINE
// ============================================================

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function getPoseData(id, t) {
    t = Math.max(0, Math.min(1, t));

    let phase = 'Concentric (Lift)';
    if (t < 0.15) phase = 'Start Position';
    else if (t > 0.8) phase = 'Peak Contraction';
    else if (t >= 0.5) phase = 'Eccentric (Lower)';

    switch (id) {
        case 'bicep-curl': {
            const head = { cx: 100, cy: 30, r: 12 };
            const neck = { x: 100, y: 44 };
            const hips = { x: 100, y: 114 };
            const leftFoot = { x: 80, y: 182 };
            const rightFoot = { x: 120, y: 182 };
            const leftKnee = { x: 86, y: 148 };
            const rightKnee = { x: 114, y: 148 };
            const leftShoulder = { x: 78, y: 56 };
            const rightShoulder = { x: 122, y: 56 };
            const leftElbow = { x: 74, y: 94 };
            const rightElbow = { x: 126, y: 94 };
            const curlAngle = (Math.PI / 2) - t * (Math.PI * 0.78);
            const armLen = 46;
            const leftHand = {
                x: Math.round(leftElbow.x - Math.cos(curlAngle) * 6),
                y: Math.round(leftElbow.y + Math.sin(curlAngle) * armLen)
            };
            const rightHand = {
                x: Math.round(rightElbow.x + Math.cos(curlAngle) * 6),
                y: Math.round(rightElbow.y + Math.sin(curlAngle) * armLen)
            };
            const bands = [
                `M 68 182 L 132 182`,
                `M 80 182 L ${leftHand.x} ${leftHand.y}`,
                `M 120 182 L ${rightHand.x} ${rightHand.y}`
            ];
            return {
                cue: t > 0.8 ? 'Squeeze Biceps at Peak!' : (t > 0.3 ? 'Curl Up - Elbows Pinned to Sides' : 'Lower Slowly - 3s Return'),
                phase, head, neck, hips,
                leftFoot, rightFoot, leftKnee, rightKnee,
                leftShoulder, rightShoulder, leftElbow, rightElbow,
                leftHand, rightHand, bands,
                view: 'front'
            };
        }

        case 'squat': {
            const leftFoot = { x: 72, y: 182 };
            const rightFoot = { x: 128, y: 182 };
            const hipX = lerp(96, 80, t);
            const hipY = lerp(110, 144, t);
            const leftKnee = { x: lerp(86, 64, t), y: lerp(148, 154, t) };
            const rightKnee = { x: lerp(116, 110, t), y: lerp(148, 154, t) };
            const neck = { x: lerp(98, 90, t), y: lerp(48, 88, t) };
            const head = { cx: lerp(98, 92, t), cy: lerp(30, 70, t), r: 12 };
            const shoulderL = { x: neck.x - 16, y: neck.y + 8 };
            const shoulderR = { x: neck.x + 18, y: neck.y + 8 };
            const leftHand = { x: shoulderL.x - 2, y: shoulderL.y + 2 };
            const rightHand = { x: shoulderR.x + 2, y: shoulderR.y + 2 };
            const leftElbow = { x: shoulderL.x - 4, y: shoulderL.y + 18 };
            const rightElbow = { x: shoulderR.x + 4, y: shoulderR.y + 18 };
            const bands = [
                `M 62 182 L 138 182`,
                `M 72 182 L ${Math.round(leftHand.x)} ${Math.round(leftHand.y)}`,
                `M 128 182 L ${Math.round(rightHand.x)} ${Math.round(rightHand.y)}`
            ];
            return {
                cue: t > 0.8 ? 'Thighs Parallel - Drive Heels!' : (t > 0.3 ? 'Hips Back, Knees Track Over Toes' : 'Stand Tall, Brace Core'),
                phase, head, neck, hips: { x: hipX, y: hipY },
                leftFoot, rightFoot, leftKnee, rightKnee,
                leftShoulder: shoulderL, rightShoulder: shoulderR,
                leftElbow, rightElbow, leftHand, rightHand, bands,
                view: 'front-squat'
            };
        }

        case 'chest-press': {
            const anchor = { x: 16, y: 78 };
            const backFoot = { x: 52, y: 182 };
            const frontFoot = { x: 120, y: 182 };
            const backKnee = { x: 68, y: 148 };
            const frontKnee = { x: 114, y: 148 };
            const hips = { x: 82, y: 116 };
            const torsoLean = t * 6;
            const neck = { x: 92 + torsoLean, y: 56 };
            const head = { cx: 98 + torsoLean, cy: 34, r: 12 };
            const shoulder = { x: 92 + torsoLean, y: 64 };
            const elbowX = lerp(66, 122, t);
            const elbowY = lerp(78, 70, t);
            const handX = lerp(90, 156, t);
            const handY = lerp(80, 70, t);
            const ctrlX = Math.round(anchor.x + (handX - anchor.x) * 0.45);
            const ctrlY = Math.round(anchor.y + (handY - anchor.y) * 0.25);
            const bands = [
                `M ${anchor.x} ${anchor.y} Q ${ctrlX} ${ctrlY} ${Math.round(handX)} ${Math.round(handY)}`
            ];
            return {
                cue: t > 0.8 ? 'Peak Chest Squeeze & Extension!' : (t > 0.3 ? 'Press Forward, Elbows at 45°' : 'Controlled Return - Feel Stretch'),
                phase, anchor, head, neck, hips,
                backFoot, frontFoot, backKnee, frontKnee,
                shoulder, elbow: { x: elbowX, y: elbowY },
                hand: { x: handX, y: handY },
                bands,
                view: 'side-press'
            };
        }

        case 'lat-pulldown': {
            const anchor = { x: 100, y: 12 };
            const knees = [{ x: 76, y: 180 }, { x: 124, y: 180 }];
            const hips = { x: 100, y: 144 };
            const neck = { x: lerp(100, 98, t), y: lerp(80, 84, t) };
            const head = { cx: lerp(100, 96, t), cy: lerp(58, 62, t), r: 12 };
            const shoulderL = { x: 78, y: neck.y };
            const shoulderR = { x: 122, y: neck.y };
            const elbowL = { x: lerp(68, 64, t), y: lerp(52, 106, t) };
            const elbowR = { x: lerp(132, 136, t), y: lerp(52, 106, t) };
            const handL = { x: lerp(56, 76, t), y: lerp(26, 80, t) };
            const handR = { x: lerp(144, 124, t), y: lerp(26, 80, t) };
            const bands = [
                `M ${anchor.x} ${anchor.y} L ${Math.round(handL.x)} ${Math.round(handL.y)}`,
                `M ${anchor.x} ${anchor.y} L ${Math.round(handR.x)} ${Math.round(handR.y)}`
            ];
            return {
                cue: t > 0.8 ? 'Squeeze Lats at Collarbone!' : (t > 0.3 ? 'Drive Elbows Down & Back' : 'Full Overhead Stretch'),
                phase, anchor, head, neck, hips, knees,
                shoulderL, shoulderR, elbowL, elbowR, handL, handR, bands,
                view: 'front-lat'
            };
        }

        case 'shoulder-press': {
            const feet = [{ x: 80, y: 182 }, { x: 120, y: 182 }];
            const hips = { x: 100, y: 114 };
            const neck = { x: 100, y: 48 };
            const head = { cx: 100, cy: 32, r: 12 };
            const shoulderL = { x: 78, y: 56 };
            const shoulderR = { x: 122, y: 56 };
            const elbowL = { x: lerp(62, 74, t), y: lerp(84, 38, t) };
            const elbowR = { x: lerp(138, 126, t), y: lerp(84, 38, t) };
            const handL = { x: lerp(68, 88, t), y: lerp(60, 16, t) };
            const handR = { x: lerp(132, 112, t), y: lerp(60, 16, t) };
            const bands = [
                `M 70 182 L 130 182`,
                `M 80 182 L ${Math.round(handL.x)} ${Math.round(handL.y)}`,
                `M 120 182 L ${Math.round(handR.x)} ${Math.round(handR.y)}`
            ];
            return {
                cue: t > 0.8 ? 'Lockout Overhead - Ribs Down!' : (t > 0.3 ? 'Press Up, Keep Core Braced' : 'Control Lower to Shoulder Level'),
                phase, head, neck, hips, feet,
                shoulderL, shoulderR, elbowL, elbowR, handL, handR, bands,
                view: 'front-press'
            };
        }

        case 'deadlift': {
            const foot = { x: 88, y: 182 };
            const hipX = lerp(56, 86, t);
            const hipY = lerp(118, 114, t);
            const kneeX = lerp(76, 86, t);
            const kneeY = lerp(150, 148, t);
            const neckX = lerp(96, 86, t);
            const neckY = lerp(82, 52, t);
            const headX = lerp(108, 86, t);
            const headY = lerp(70, 30, t);
            const shoulder = { x: neckX, y: neckY + 4 };
            const handX = lerp(94, 90, t);
            const handY = lerp(142, 114, t);
            const bands = [
                `M 78 182 L 98 182`,
                `M ${foot.x} ${foot.y} L ${Math.round(handX)} ${Math.round(handY)}`
            ];
            return {
                cue: t > 0.8 ? 'Lockout! Squeeze Glutes at Top' : (t > 0.3 ? 'Drive Hips Forward, Flat Spine' : 'Hinge at Hips, Push Floor Away'),
                phase,
                head: { cx: headX, cy: headY, r: 12 },
                neck: { x: neckX, y: neckY },
                hips: { x: hipX, y: hipY },
                knee: { x: kneeX, y: kneeY },
                foot, shoulder, hand: { x: handX, y: handY },
                bands,
                view: 'side-deadlift'
            };
        }

        case 'tricep-extension': {
            const foot = { x: 84, y: 182 };
            const hips = { x: 84, y: 114 };
            const neck = { x: 88, y: 54 };
            const head = { cx: 90, cy: 32, r: 12 };
            const shoulder = { x: 88, y: 56 };
            const elbow = { x: 86, y: 22 };
            const handX = lerp(62, 88, t);
            const handY = lerp(52, 8, t);
            const bands = [
                `M 72 120 L ${Math.round(handX)} ${Math.round(handY)}`
            ];
            return {
                cue: t > 0.8 ? 'Triceps Fully Contracted!' : (t > 0.3 ? 'Extend Overhead - Elbows In' : 'Lower Slowly Behind Head'),
                phase, head, neck, hips, foot, shoulder, elbow,
                hand: { x: handX, y: handY },
                bands,
                view: 'side-tricep'
            };
        }

        case 'glute-bridge': {
            const head = { cx: 34, cy: 156, r: 11 };
            const neck = { x: 46, y: 156 };
            const shoulder = { x: 56, y: 156 };
            const foot = { x: 142, y: 162 };
            const hipY = lerp(156, 98, t);
            const hipX = lerp(90, 98, t);
            const kneeX = lerp(122, 126, t);
            const kneeY = lerp(122, 98, t);
            const hand = { x: 92, y: 160 };
            const bands = [
                `M 82 162 Q ${Math.round(hipX)} ${Math.round(hipY - 4)} 104 162`
            ];
            return {
                cue: t > 0.8 ? 'Bridge High - Max Glute Tension!' : (t > 0.3 ? 'Drive Heels into Floor' : 'Lower Slowly, Keep Tension'),
                phase, head, neck, shoulder, foot,
                hips: { x: hipX, y: hipY },
                knee: { x: kneeX, y: kneeY },
                hand, bands,
                view: 'side-bridge'
            };
        }

        case 'face-pull': {
            const anchor = { x: 16, y: 64 };
            const feet = [{ x: 92, y: 182 }, { x: 114, y: 182 }];
            const hips = { x: 106, y: 114 };
            const neck = { x: 100, y: 58 };
            const head = { cx: 100, cy: 36, r: 12 };
            const shoulder = { x: 98, y: 62 };
            const elbow = { x: lerp(68, 126, t), y: lerp(66, 52, t) };
            const hand = { x: lerp(54, 88, t), y: lerp(64, 56, t) };
            const bands = [
                `M ${anchor.x} ${anchor.y} L ${Math.round(hand.x)} ${Math.round(hand.y)}`
            ];
            return {
                cue: t > 0.8 ? 'Spread Handles to Ears - Squeeze!' : (t > 0.3 ? 'Pull High - Elbows Flare' : 'Control Return - Arms Straight'),
                phase, anchor, head, neck, hips, feet,
                shoulder, elbow, hand, bands,
                view: 'side-facepull'
            };
        }

        case 'plank-row': {
            const anchor = { x: 15, y: 162 };
            const foot = { x: 165, y: 142 };
            const hips = { x: 115, y: 126 };
            const shoulder = { x: 65, y: 114 };
            const head = { cx: 45, cy: 108, r: 11 };
            const supportHand = { x: 65, y: 162 };
            const rowElbow = { x: lerp(52, 94, t), y: lerp(136, 98, t) };
            const rowHand = { x: lerp(40, 102, t), y: lerp(150, 122, t) };
            const bands = [
                `M ${anchor.x} ${anchor.y} L ${Math.round(rowHand.x)} ${Math.round(rowHand.y)}`
            ];
            return {
                cue: t > 0.8 ? 'Row High - Hips Dead Square!' : (t > 0.3 ? 'Drive Elbow Past Ribs' : 'Brace Core, Solid Plank'),
                phase, anchor, head, hips, shoulder, supportHand,
                foot, elbow: rowElbow, hand: rowHand, bands,
                view: 'side-plank'
            };
        }

        case 'band-pull-apart': {
            const feet = [{ x: 82, y: 182 }, { x: 118, y: 182 }];
            const hips = { x: 100, y: 114 };
            const neck = { x: 100, y: 48 };
            const head = { cx: 100, cy: 32, r: 12 };
            const shoulderL = { x: 78, y: 56 };
            const shoulderR = { x: 122, y: 56 };
            const handLX = lerp(86, 28, t);
            const handRX = lerp(114, 172, t);
            const elbowLX = lerp(82, 54, t);
            const elbowRX = lerp(118, 146, t);
            const bands = [
                `M ${Math.round(handLX)} 72 L ${Math.round(handRX)} 72`
            ];
            return {
                cue: t > 0.8 ? 'Touch Band to Chest - Squeeze!' : (t > 0.3 ? 'Pull Apart, Scapulae Retracting' : 'Control Inward Return'),
                phase, head, neck, hips, feet,
                shoulderL, shoulderR,
                elbowL: { x: elbowLX, y: 72 },
                elbowR: { x: elbowRX, y: 72 },
                handL: { x: handLX, y: 72 },
                handR: { x: handRX, y: 72 },
                bands,
                view: 'front-pullapart'
            };
        }

        case 'standing-row': {
            const anchor = { x: 16, y: 98 };
            const foot = { x: 105, y: 182 };
            const hips = { x: 114, y: 118 };
            const knee = { x: 106, y: 150 };
            const neck = { x: 96, y: 66 };
            const head = { cx: 92, cy: 44, r: 12 };
            const shoulder = { x: 96, y: 70 };
            const elbow = { x: lerp(68, 134, t), y: lerp(84, 78, t) };
            const hand = { x: lerp(48, 98, t), y: lerp(96, 86, t) };
            const bands = [
                `M ${anchor.x} ${anchor.y} L ${Math.round(hand.x)} ${Math.round(hand.y)}`
            ];
            return {
                cue: t > 0.8 ? 'Pull Past Ribs - Pinch Back!' : (t > 0.3 ? 'Lead with Elbows, Chest Up' : 'Full Stretch Forward'),
                phase, anchor, head, neck, hips, knee, foot,
                shoulder, elbow, hand, bands,
                view: 'side-row'
            };
        }
        default:
            return null;
    }
}

function renderExerciseSVG(id, progress = 0, isModal = false) {
    const p = getPoseData(id, progress);
    if (!p) return '<svg viewBox="0 0 200 200"></svg>';

    const glowFilter = `
    <defs>
      <filter id="band-glow-${id}" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="0" stdDeviation="2.5" flood-color="#FF7A00" flood-opacity="0.75"/>
      </filter>
      <linearGradient id="gym-floor-${id}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.02)"/>
        <stop offset="50%" stop-color="rgba(255,255,255,0.2)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
      </linearGradient>
    </defs>
  `;

    let anchorMarkup = '';
    if (p.anchor) {
        if (id === 'lat-pulldown') {
            anchorMarkup = `
        <line x1="85" y1="${p.anchor.y}" x2="115" y2="${p.anchor.y}" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
        <circle cx="${p.anchor.x}" cy="${p.anchor.y}" r="4" fill="#F4A261"/>
      `;
        } else {
            anchorMarkup = `
        <line x1="${p.anchor.x}" y1="${p.anchor.y - 25}" x2="${p.anchor.x}" y2="${p.anchor.y + 25}" stroke="rgba(255,255,255,0.25)" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="${p.anchor.x}" cy="${p.anchor.y}" r="4.5" fill="#94A3B8" stroke="#FFFFFF" stroke-width="1.5"/>
      `;
        }
    }

    const floorLine = (p.view === 'side-bridge' || p.view === 'side-plank')
        ? `<line x1="15" y1="165" x2="185" y2="165" stroke="url(#gym-floor-${id})" stroke-width="2" stroke-linecap="round"/>`
        : `<line x1="20" y1="182" x2="180" y2="182" stroke="url(#gym-floor-${id})" stroke-width="2" stroke-linecap="round"/>`;

    let bodyMarkup = '';

    if (p.view === 'front') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.leftKnee.x}" y2="${p.leftKnee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.leftKnee.x}" y1="${p.leftKnee.y}" x2="${p.leftFoot.x}" y2="${p.leftFoot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.rightKnee.x}" y2="${p.rightKnee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.rightKnee.x}" y1="${p.rightKnee.y}" x2="${p.rightFoot.x}" y2="${p.rightFoot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.leftShoulder.x}" y1="${p.leftShoulder.y}" x2="${p.leftElbow.x}" y2="${p.leftElbow.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.leftElbow.x}" y1="${p.leftElbow.y}" x2="${p.leftHand.x}" y2="${p.leftHand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.rightShoulder.x}" y1="${p.rightShoulder.y}" x2="${p.rightElbow.x}" y2="${p.rightElbow.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.rightElbow.x}" y1="${p.rightElbow.y}" x2="${p.rightHand.x}" y2="${p.rightHand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.leftElbow.x}" cy="${p.leftElbow.y}" r="3" fill="#A7F3D0"/>
      <circle cx="${p.rightElbow.x}" cy="${p.rightElbow.y}" r="3" fill="#A7F3D0"/>
      <circle cx="${p.leftKnee.x}" cy="${p.leftKnee.y}" r="3" fill="#A7F3D0"/>
      <circle cx="${p.rightKnee.x}" cy="${p.rightKnee.y}" r="3" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'front-squat') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.leftKnee.x}" y2="${p.leftKnee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.leftKnee.x}" y1="${p.leftKnee.y}" x2="${p.leftFoot.x}" y2="${p.leftFoot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.rightKnee.x}" y2="${p.rightKnee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.rightKnee.x}" y1="${p.rightKnee.y}" x2="${p.rightFoot.x}" y2="${p.rightFoot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.leftShoulder.x}" y1="${p.leftShoulder.y}" x2="${p.leftElbow.x}" y2="${p.leftElbow.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.leftElbow.x}" y1="${p.leftElbow.y}" x2="${p.leftHand.x}" y2="${p.leftHand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.rightShoulder.x}" y1="${p.rightShoulder.y}" x2="${p.rightElbow.x}" y2="${p.rightElbow.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.rightElbow.x}" y1="${p.rightElbow.y}" x2="${p.rightHand.x}" y2="${p.rightHand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.leftKnee.x}" cy="${p.leftKnee.y}" r="3" fill="#A7F3D0"/>
      <circle cx="${p.rightKnee.x}" cy="${p.rightKnee.y}" r="3" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'side-press') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.backKnee.x}" y2="${p.backKnee.y}" stroke="#CBD5E1" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.backKnee.x}" y1="${p.backKnee.y}" x2="${p.backFoot.x}" y2="${p.backFoot.y}" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.frontKnee.x}" y2="${p.frontKnee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.frontKnee.x}" y1="${p.frontKnee.y}" x2="${p.frontFoot.x}" y2="${p.frontFoot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.elbow.x}" y2="${p.elbow.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.elbow.x}" y1="${p.elbow.y}" x2="${p.hand.x}" y2="${p.hand.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <circle cx="${p.elbow.x}" cy="${p.elbow.y}" r="3.5" fill="#A7F3D0"/>
      <circle cx="${p.frontKnee.x}" cy="${p.frontKnee.y}" r="3" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'front-lat') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.knees[0].x}" y2="${p.knees[0].y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.knees[1].x}" y2="${p.knees[1].y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.shoulderL.x}" y1="${p.shoulderL.y}" x2="${p.elbowL.x}" y2="${p.elbowL.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.elbowL.x}" y1="${p.elbowL.y}" x2="${p.handL.x}" y2="${p.handL.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.shoulderR.x}" y1="${p.shoulderR.y}" x2="${p.elbowR.x}" y2="${p.elbowR.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.elbowR.x}" y1="${p.elbowR.y}" x2="${p.handR.x}" y2="${p.handR.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.elbowL.x}" cy="${p.elbowL.y}" r="3" fill="#A7F3D0"/>
      <circle cx="${p.elbowR.x}" cy="${p.elbowR.y}" r="3" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'front-press' || p.view === 'front-pullapart') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.feet[0].x}" y2="${p.feet[0].y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.feet[1].x}" y2="${p.feet[1].y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.shoulderL.x}" y1="${p.shoulderL.y}" x2="${p.elbowL.x}" y2="${p.elbowL.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.elbowL.x}" y1="${p.elbowL.y}" x2="${p.handL.x}" y2="${p.handL.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.shoulderR.x}" y1="${p.shoulderR.y}" x2="${p.elbowR.x}" y2="${p.elbowR.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.elbowR.x}" y1="${p.elbowR.y}" x2="${p.handR.x}" y2="${p.handR.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.elbowL.x}" cy="${p.elbowL.y}" r="3" fill="#A7F3D0"/>
      <circle cx="${p.elbowR.x}" cy="${p.elbowR.y}" r="3" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'side-deadlift') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.knee.x}" y2="${p.knee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.knee.x}" y1="${p.knee.y}" x2="${p.foot.x}" y2="${p.foot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.hand.x}" y2="${p.hand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.knee.x}" cy="${p.knee.y}" r="3" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'side-tricep') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.foot.x}" y2="${p.foot.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.elbow.x}" y2="${p.elbow.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.elbow.x}" y1="${p.elbow.y}" x2="${p.hand.x}" y2="${p.hand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.elbow.x}" cy="${p.elbow.y}" r="3" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'side-bridge') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.shoulder.x}" y2="${p.shoulder.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.knee.x}" y2="${p.knee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.knee.x}" y1="${p.knee.y}" x2="${p.foot.x}" y2="${p.foot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.knee.x}" cy="${p.knee.y}" r="3" fill="#A7F3D0"/>
      <circle cx="${p.hips.x}" cy="${p.hips.y}" r="3.5" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'side-facepull' || p.view === 'side-row') {
        const legMarkup = p.feet
            ? `<line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.feet[0].x}" y2="${p.feet[0].y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
         <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.feet[1].x}" y2="${p.feet[1].y}" stroke="#CBD5E1" stroke-width="4.5" stroke-linecap="round"/>`
            : `<line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.knee.x}" y2="${p.knee.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
         <line x1="${p.knee.x}" y1="${p.knee.y}" x2="${p.foot.x}" y2="${p.foot.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>`;
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.neck.x}" y1="${p.neck.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      ${legMarkup}
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.elbow.x}" y2="${p.elbow.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.elbow.x}" y1="${p.elbow.y}" x2="${p.hand.x}" y2="${p.hand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.elbow.x}" cy="${p.elbow.y}" r="3.5" fill="#A7F3D0"/>
    `;
    } else if (p.view === 'side-plank') {
        bodyMarkup = `
      <circle cx="${p.head.cx}" cy="${p.head.cy}" r="${p.head.r}" fill="#FFFFFF"/>
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.hips.x}" y2="${p.hips.y}" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="${p.hips.x}" y1="${p.hips.y}" x2="${p.foot.x}" y2="${p.foot.y}" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.supportHand.x}" y2="${p.supportHand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.shoulder.x}" y1="${p.shoulder.y}" x2="${p.elbow.x}" y2="${p.elbow.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="${p.elbow.x}" y1="${p.elbow.y}" x2="${p.hand.x}" y2="${p.hand.y}" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${p.elbow.x}" cy="${p.elbow.y}" r="3" fill="#A7F3D0"/>
    `;
    }

    const bandMarkup = p.bands.map(d => `
    <path d="${d}" stroke="#FF7A00" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(#band-glow-${id})"/>
  `).join('');

    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="exercise-svg-root" data-exercise="${id}">
    ${glowFilter}
    ${anchorMarkup}
    ${floorLine}
    ${bandMarkup}
    ${bodyMarkup}
  </svg>`;
}

// Global state for card animations
const activeCardAnims = {};
const cardLeaveTimers = {};

// Clean up and purge any debug UI, simulation banners, or development overlays
function purgeDebugBanners(root = document) {
    if (!root || !root.querySelectorAll) return;
    const elements = root.querySelectorAll('*');
    elements.forEach(el => {
        const text = el.textContent || '';
        const cls = el.className && typeof el.className === 'string' ? el.className.toLowerCase() : '';
        const id = el.id ? el.id.toLowerCase() : '';
        if (
            text.includes('Simulate Bottom') ||
            text.includes('Feed Image') ||
            cls.includes('simulate') ||
            id.includes('simulate') ||
            cls.includes('debug-banner') ||
            id.includes('debug-banner')
        ) {
            el.remove();
        }
    });
}

// Global observer to immediately discard any injected debug/simulation overlays
if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
    const debugObserver = new MutationObserver((mutations) => {
        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (node.nodeType === 1) {
                    const text = node.textContent || '';
                    const cls = node.className && typeof node.className === 'string' ? node.className.toLowerCase() : '';
                    const id = node.id ? node.id.toLowerCase() : '';
                    if (
                        text.includes('Simulate Bottom') ||
                        text.includes('Feed Image') ||
                        cls.includes('simulate') ||
                        id.includes('simulate') ||
                        cls.includes('debug-banner') ||
                        id.includes('debug-banner')
                    ) {
                        node.remove();
                    }
                }
            }
        }
    });
    if (document.documentElement) {
        debugObserver.observe(document.documentElement, { childList: true, subtree: true });
    }
}

function handleCardMouseEnter(exId) {
    purgeDebugBanners();
    if (cardLeaveTimers[exId]) {
        clearTimeout(cardLeaveTimers[exId]);
        delete cardLeaveTimers[exId];
    }
    startCardAnimation(exId);
}

function handleCardMouseLeave(exId) {
    if (cardLeaveTimers[exId]) clearTimeout(cardLeaveTimers[exId]);
    cardLeaveTimers[exId] = setTimeout(() => {
        stopCardAnimation(exId);
        delete cardLeaveTimers[exId];
    }, 150);
}

function startCardAnimation(exId) {
    if (activeCardAnims[exId]) return;
    const svgWrap = document.getElementById(`card-svg-${exId}`);
    const cueText = document.getElementById(`cue-text-${exId}`);
    if (!svgWrap) return;

    let startTime = performance.now();
    const repDuration = 2200; // ms per rep

    function animateCard(now) {
        const elapsed = now - startTime;
        const phase = (elapsed % repDuration) / repDuration * 2 * Math.PI;
        const progress = (1 - Math.cos(phase)) / 2;

        const liveSvgWrap = document.getElementById(`card-svg-${exId}`);
        const liveCueText = document.getElementById(`cue-text-${exId}`);
        if (liveSvgWrap) {
            liveSvgWrap.innerHTML = renderExerciseSVG(exId, progress);
        }
        if (liveCueText) {
            const pose = getPoseData(exId, progress);
            liveCueText.textContent = pose ? ('⚡ ' + pose.cue) : '⚡ Moving';
        }

        activeCardAnims[exId] = requestAnimationFrame(animateCard);
    }

    activeCardAnims[exId] = requestAnimationFrame(animateCard);
}

function stopCardAnimation(exId) {
    if (activeCardAnims[exId]) {
        cancelAnimationFrame(activeCardAnims[exId]);
        delete activeCardAnims[exId];
    }
    const svgWrap = document.getElementById(`card-svg-${exId}`);
    const cueText = document.getElementById(`cue-text-${exId}`);
    if (svgWrap) {
        svgWrap.innerHTML = renderExerciseSVG(exId, 0);
    }
    if (cueText) {
        cueText.textContent = '👆 Move cursor to animate';
    }
}

let currentExpandedExerciseId = null;
let currentExerciseCat = 'all';

const expandedAnimState = {
    id: null,
    isPlaying: true,
    speed: 1.0,
    startTime: 0,
    elapsedOffset: 0,
    repCount: 1,
    rafId: null
};

function startExpandedAnimation(id) {
    stopExpandedAnimation();
    expandedAnimState.id = id;
    expandedAnimState.isPlaying = true;
    expandedAnimState.repCount = 1;
    expandedAnimState.startTime = performance.now();
    expandedAnimState.elapsedOffset = 0;

    const basePeriod = 2400; // ms per rep

    function animateExpanded(now) {
        if (!expandedAnimState.isPlaying) {
            expandedAnimState.rafId = requestAnimationFrame(animateExpanded);
            return;
        }

        const elapsed = (now - expandedAnimState.startTime) * expandedAnimState.speed + expandedAnimState.elapsedOffset;
        const totalRepsCompleted = Math.floor(elapsed / basePeriod);
        expandedAnimState.repCount = totalRepsCompleted + 1;

        const phase = (elapsed % basePeriod) / basePeriod * 2 * Math.PI;
        const progress = (1 - Math.cos(phase)) / 2;

        updateExpandedFrame(id, progress);
        expandedAnimState.rafId = requestAnimationFrame(animateExpanded);
    }

    expandedAnimState.rafId = requestAnimationFrame(animateExpanded);
}

function stopExpandedAnimation() {
    if (expandedAnimState.rafId) {
        cancelAnimationFrame(expandedAnimState.rafId);
        expandedAnimState.rafId = null;
    }
}

function updateExpandedFrame(id, progress) {
    const wrap = document.getElementById(`expanded-svg-wrap-${id}`);
    const phaseBadge = document.getElementById(`expanded-phase-badge-${id}`);
    const repBadge = document.getElementById(`expanded-rep-badge-${id}`);
    const cueEl = document.getElementById(`expanded-coaching-cue-${id}`);

    const data = getPoseData(id, progress);
    if (!data) return;

    if (wrap) wrap.innerHTML = renderExerciseSVG(id, progress, true);
    if (phaseBadge) phaseBadge.textContent = data.phase;
    if (repBadge) repBadge.textContent = `Rep ${expandedAnimState.repCount}`;
    if (cueEl) cueEl.textContent = `💡 ${data.cue}`;
}

function toggleExpandedPlay(id) {
    const btn = document.getElementById(`expanded-play-btn-${id}`);
    expandedAnimState.isPlaying = !expandedAnimState.isPlaying;
    if (expandedAnimState.isPlaying) {
        expandedAnimState.startTime = performance.now();
        if (btn) btn.innerHTML = '⏸ Pause';
    } else {
        if (btn) btn.innerHTML = '▶ Play';
    }
}

function toggleExpandedSpeed(id) {
    const btn = document.getElementById(`expanded-speed-btn-${id}`);
    if (expandedAnimState.speed === 1.0) {
        expandedAnimState.speed = 0.5;
        if (btn) {
            btn.innerHTML = '🐢 0.5x Slow-Mo';
            btn.classList.add('active');
        }
    } else {
        expandedAnimState.speed = 1.0;
        if (btn) {
            btn.innerHTML = '⚡ 1x Normal';
            btn.classList.remove('active');
        }
    }
}

function toggleExpandExercise(id, e) {
    if (e) e.stopPropagation();
    if (activeCardAnims[id]) {
        cancelAnimationFrame(activeCardAnims[id]);
        delete activeCardAnims[id];
    }
    if (cardLeaveTimers[id]) {
        clearTimeout(cardLeaveTimers[id]);
        delete cardLeaveTimers[id];
    }
    if (currentExpandedExerciseId === id) {
        currentExpandedExerciseId = null;
        stopExpandedAnimation();
    } else {
        currentExpandedExerciseId = id;
    }
    renderExerciseGrid(currentExerciseCat);
    if (currentExpandedExerciseId) {
        setTimeout(() => {
            const el = document.getElementById(`card-expanded-${id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
    }
}

function closeExpandedExercise(e) {
    if (e) e.stopPropagation();
    currentExpandedExerciseId = null;
    stopExpandedAnimation();
    renderExerciseGrid(currentExerciseCat);
}

function navigateExpandedExercise(direction, e) {
    if (e) e.stopPropagation();
    const list = currentExerciseCat === 'all' ? EXERCISES : EXERCISES.filter(e => e.cat === currentExerciseCat);
    if (!list.length) return;

    let currentIndex = list.findIndex(e => e.id === currentExpandedExerciseId);
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = list.length - 1;
    if (nextIndex >= list.length) nextIndex = 0;

    currentExpandedExerciseId = list[nextIndex].id;
    renderExerciseGrid(currentExerciseCat);

    setTimeout(() => {
        const el = document.getElementById(`card-expanded-${currentExpandedExerciseId}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 40);
}

function renderExerciseGrid(cat) {
    currentExerciseCat = cat || 'all';
    const grid = document.getElementById('exercise-grid');

    // Clean up any stale card animation frames and leave timers
    Object.keys(activeCardAnims).forEach(k => {
        cancelAnimationFrame(activeCardAnims[k]);
        delete activeCardAnims[k];
    });
    Object.keys(cardLeaveTimers).forEach(k => {
        clearTimeout(cardLeaveTimers[k]);
        delete cardLeaveTimers[k];
    });

    const list = currentExerciseCat === 'all' ? EXERCISES : EXERCISES.filter(e => e.cat === currentExerciseCat);

    const activeIdx = list.findIndex(e => e.id === currentExpandedExerciseId);
    const prevItem = activeIdx >= 0 ? list[(activeIdx - 1 + list.length) % list.length] : null;
    const nextItem = activeIdx >= 0 ? list[(activeIdx + 1) % list.length] : null;

    grid.innerHTML = list.map((ex, idx) => {
        const isExpanded = (currentExpandedExerciseId === ex.id);

        if (isExpanded) {
            return `
            <div class="card exercise-card is-expanded" id="card-expanded-${ex.id}" data-exercise="${ex.id}">
              <div class="expanded-card-header">
                <div class="expanded-card-title-wrap">
                  <span style="font-size:2.2rem">${ex.emoji}</span>
                  <div>
                    <div class="expanded-card-title">${ex.name}</div>
                    <div style="font-size:.84rem;color:var(--text-muted)">${ex.muscles} · Target Muscle Focus</div>
                  </div>
                </div>
                <div class="expanded-card-actions">
                  <div class="expanded-nav-group">
                    <button class="btn-nav-exercise" onclick="navigateExpandedExercise(-1, event)" title="Previous (or Left Arrow)">
                      <span>←</span> Prev
                    </button>
                    <span class="expanded-nav-counter">${idx + 1} of ${list.length}</span>
                    <button class="btn-nav-exercise" onclick="navigateExpandedExercise(1, event)" title="Next (or Right Arrow)">
                      Next <span>→</span>
                    </button>
                  </div>
                  <button class="btn-collapse-card" onclick="closeExpandedExercise(event)">
                    <span>✕</span> Close
                  </button>
                </div>
              </div>

              <div class="expanded-card-body">
                <!-- Left: Large Animated Visual Stage -->
                <div>
                  <div class="expanded-card-visual-box">
                    <div class="modal-top-bar">
                      <span class="phase-badge" id="expanded-phase-badge-${ex.id}">Start Position</span>
                      <span class="rep-counter-badge" id="expanded-rep-badge-${ex.id}">Rep 1</span>
                    </div>
                    <div class="expanded-svg-wrap" id="expanded-svg-wrap-${ex.id}">
                      ${renderExerciseSVG(ex.id, 0, true)}
                    </div>
                    <div class="modal-coaching-cue" id="expanded-coaching-cue-${ex.id}">
                      💡 Move slowly • Control the return
                    </div>
                    <div class="modal-controls-row">
                      <button class="modal-ctrl-btn" id="expanded-play-btn-${ex.id}" onclick="toggleExpandedPlay('${ex.id}')">⏸ Pause</button>
                      <button class="modal-ctrl-btn" id="expanded-speed-btn-${ex.id}" onclick="toggleExpandedSpeed('${ex.id}')">⚡ 1x Normal</button>
                    </div>
                  </div>
                </div>

                <!-- Right: Full Exercise Details & Instructions -->
                <div class="expanded-card-details">
                  <div class="expanded-stats-grid">
                    <div class="expanded-stat-item">
                      <div class="expanded-stat-val">${ex.sets}</div>
                      <div class="expanded-stat-lbl">Sets</div>
                    </div>
                    <div class="expanded-stat-item">
                      <div class="expanded-stat-val">${ex.reps}</div>
                      <div class="expanded-stat-lbl">Reps</div>
                    </div>
                    <div class="expanded-stat-item">
                      <div class="expanded-stat-val">${ex.rest}</div>
                      <div class="expanded-stat-lbl">Rest</div>
                    </div>
                    <div class="expanded-stat-item">
                      <div class="expanded-stat-val" style="font-size:.85rem;color:var(--green-mid);text-transform:capitalize">${ex.cat}</div>
                      <div class="expanded-stat-lbl">Target</div>
                    </div>
                  </div>

                  <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;color:var(--green-dark)">
                    How to perform properly
                  </div>

                  <div style="display:flex;flex-direction:column;gap:8px">
                    ${ex.steps.map((s, i) => `
                      <div class="ex-step" style="margin-bottom:0">
                        <strong>Step ${i + 1}: ${s.title}</strong>
                        ${s.text}
                      </div>
                    `).join('')}
                  </div>

                  <div class="ex-tips" style="margin-top:0">
                    ${ex.tips}
                  </div>
                </div>

                <!-- Bottom: Next & Previous Exercise Navigation -->
                <div class="expanded-bottom-nav">
                  <button class="btn-nav-large" onclick="navigateExpandedExercise(-1, event)">
                    <span>←</span> Previous: ${prevItem ? prevItem.name : 'Prev'}
                  </button>
                  <button class="btn-nav-large" onclick="navigateExpandedExercise(1, event)">
                    Next: ${nextItem ? nextItem.name : 'Next'} <span>→</span>
                  </button>
                </div>
              </div>
            </div>`;
        }

        return `
        <div class="card exercise-card" data-exercise="${ex.id}"
          onmouseenter="handleCardMouseEnter('${ex.id}')"
          onmouseleave="handleCardMouseLeave('${ex.id}')"
          onclick="toggleExpandExercise('${ex.id}', event)">
          <div class="exercise-card-visual" id="card-vis-${ex.id}">
            <div class="card-svg-container" id="card-svg-${ex.id}">
              ${renderExerciseSVG(ex.id, 0)}
            </div>
            <div class="card-hover-cue" id="cue-${ex.id}">
              <span class="cue-dot"></span>
              <span class="cue-text" id="cue-text-${ex.id}">👆 Move cursor to animate</span>
            </div>
          </div>
          <div class="exercise-card-content">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
              <span style="font-size:1.35rem">${ex.emoji}</span>
              <span style="font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;color:var(--text-dark)">${ex.name}</span>
            </div>
            <div style="font-size:.78rem;color:var(--text-muted);margin-bottom:6px">${ex.muscles}</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <span style="background:var(--bg);padding:3px 8px;border-radius:6px;font-size:.75rem;font-weight:600">${ex.sets} sets</span>
              <span style="background:var(--bg);padding:3px 8px;border-radius:6px;font-size:.75rem;font-weight:600">${ex.reps} reps</span>
              <span style="background:#ECFDF5;color:var(--green-mid);padding:3px 8px;border-radius:6px;font-size:.75rem;font-weight:600">${ex.cat}</span>
            </div>
          </div>
        </div>`;
    }).join('');

    if (currentExpandedExerciseId) {
        if (list.some(e => e.id === currentExpandedExerciseId)) {
            startExpandedAnimation(currentExpandedExerciseId);
        } else {
            stopExpandedAnimation();
        }
    } else {
        stopExpandedAnimation();
    }
}

function filterExercises(cat, el) {
    document.querySelectorAll('#ex-cat-tabs .cat-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderExerciseGrid(cat);
}

function openExercise(id) {
    showPage('exercises');
    const ex = EXERCISES.find(e => e.id === id);
    if (!ex) return;
    currentExerciseCat = 'all';
    document.querySelectorAll('#ex-cat-tabs .cat-tab').forEach(t => {
        t.classList.toggle('active', t.textContent.trim().toLowerCase() === 'all');
    });
    currentExpandedExerciseId = id;
    renderExerciseGrid('all');
    setTimeout(() => {
        const el = document.getElementById(`card-expanded-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);
}

function closeModal() {
    stopExpandedAnimation();
    const modal = document.getElementById('ex-modal');
    if (modal) modal.classList.remove('open');
}

const modalEl = document.getElementById('ex-modal');
if (modalEl) {
    modalEl.addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
}

window.addEventListener('keydown', function (e) {
    if (currentExpandedExerciseId) {
        if (e.key === 'Escape') {
            closeExpandedExercise();
        } else if (e.key === 'ArrowRight') {
            navigateExpandedExercise(1);
        } else if (e.key === 'ArrowLeft') {
            navigateExpandedExercise(-1);
        }
    }
});

// Backward compatibility SVG drawers
function drawBicepCurl() { return renderExerciseSVG('bicep-curl', 0.6); }
function drawSquat() { return renderExerciseSVG('squat', 0.8); }
function drawChestPress() { return renderExerciseSVG('chest-press', 0.8); }
function drawLatPulldown() { return renderExerciseSVG('lat-pulldown', 0.8); }
function drawShoulderPress() { return renderExerciseSVG('shoulder-press', 0.8); }
function drawDeadlift() { return renderExerciseSVG('deadlift', 0.8); }
function drawTricep() { return renderExerciseSVG('tricep-extension', 0.8); }
function drawGluteBridge() { return renderExerciseSVG('glute-bridge', 0.8); }
function drawFacePull() { return renderExerciseSVG('face-pull', 0.8); }
function drawPlankRow() { return renderExerciseSVG('plank-row', 0.8); }
function drawPullApart() { return renderExerciseSVG('band-pull-apart', 0.8); }
function drawStandingRow() { return renderExerciseSVG('standing-row', 0.8); }

// ============================================================
// KCAL CALCULATOR
// ============================================================
let currentSearch = '';
let filteredFoods = [...FOOD_DB];

function searchFood(val) {
    currentSearch = val.toLowerCase().trim();
    const sugBox = document.getElementById('food-suggestions');
    if (!currentSearch) { sugBox.style.display = 'none'; return; }

    const matches = FOOD_DB.filter(f => f.name.toLowerCase().includes(currentSearch)).slice(0, 12);
    if (!matches.length) { sugBox.style.display = 'none'; return; }

    sugBox.innerHTML = matches.map(f => `
    <div class="suggestion-item" onclick="selectFood('${f.name.replace(/'/g, "\\'")}')">
      <div>
        <div class="sug-name">${f.name}</div>
        <div class="sug-cal">${f.cat} · P: ${f.protein}g | C: ${f.carb}g | F: ${f.fat}g</div>
      </div>
      <div style="font-weight:700;color:var(--green-dark)">${f.cal} kcal</div>
    </div>
  `).join('');
    sugBox.style.display = 'block';
}

function selectFood(name) {
    selectedFood = FOOD_DB.find(f => f.name === name);
    document.getElementById('food-search').value = name;
    document.getElementById('food-suggestions').style.display = 'none';
}

function addFoodLog() {
    if (!selectedFood) {
        const name = document.getElementById('food-search').value.trim();
        if (!name) { alert('Please search and select a food item.'); return; }
        // Try to match
        selectedFood = FOOD_DB.find(f => f.name.toLowerCase().includes(name.toLowerCase()));
        if (!selectedFood) { alert('Food not found. Please select from the suggestions.'); return; }
    }
    const qty = +document.getElementById('food-qty').value || 100;
    const factor = qty / 100;
    const entry = {
        name: selectedFood.name,
        qty,
        cal: Math.round(selectedFood.cal * factor),
        protein: +(selectedFood.protein * factor).toFixed(1),
        carb: +(selectedFood.carb * factor).toFixed(1),
        fat: +(selectedFood.fat * factor).toFixed(1),
        id: Date.now()
    };
    foodLog.push(entry);
    updateFoodLog();
    document.getElementById('food-search').value = '';
    document.getElementById('food-qty').value = 100;
    selectedFood = null;
}

function updateFoodLog() {
    const total = foodLog.reduce((a, f) => ({ cal: a.cal + f.cal, protein: a.protein + f.protein, carb: a.carb + f.carb, fat: a.fat + f.fat }), { cal: 0, protein: 0, carb: 0, fat: 0 });
    document.getElementById('total-kcal-disp').textContent = total.cal + ' kcal';
    document.getElementById('total-prot-disp').textContent = total.protein.toFixed(1) + 'g';
    document.getElementById('total-carb-disp').textContent = total.carb.toFixed(1) + 'g';
    document.getElementById('total-fat-disp').textContent = total.fat.toFixed(1) + 'g';

    if (!foodLog.length) { document.getElementById('food-log-card').style.display = 'none'; return; }
    document.getElementById('food-log-card').style.display = 'block';
    document.getElementById('food-log-list').innerHTML = foodLog.map(f =>
        `<div class="log-entry">
      <div class="log-name">${f.name}<div style="font-size:.75rem;color:var(--text-muted)">${f.qty}g | P:${f.protein}g C:${f.carb}g F:${f.fat}g</div></div>
      <div class="log-cal">${f.cal} kcal</div>
      <button class="log-remove" onclick="removeLog(${f.id})">🗑</button>
    </div>`
    ).join('');
}

function removeLog(id) {
    foodLog = foodLog.filter(f => f.id !== id);
    updateFoodLog();
}

function clearLog() {
    foodLog = [];
    updateFoodLog();
}

function filterFoodCat(cat, el) {
    document.querySelectorAll('.cat-tabs .cat-tab').forEach(t => t.classList.remove('active'));
    // fix: only affect kcal page tabs
    el.classList.add('active');
    currentFoodCat = cat;
    renderQuickAdd(cat);
}

function renderQuickAdd(cat) {
    const grid = document.getElementById('quick-add-grid');
    const items = cat === 'all' ? FOOD_DB.slice(0, 30) : FOOD_DB.filter(f => f.cat === cat);
    grid.innerHTML = items.map(f => `
    <div style="background:var(--bg);border-radius:10px;padding:12px;cursor:pointer;transition:background .15s"
      onmouseenter="this.style.background='#EEF9F2'" onmouseleave="this.style.background='var(--bg)'"
      onclick="quickAdd('${f.name.replace(/'/g, "\\'")}')">
      <div style="font-weight:600;font-size:.88rem">${f.name}</div>
      <div style="font-size:.75rem;color:var(--text-muted);margin-top:2px">${f.cal} kcal / 100g</div>
      <div style="font-size:.72rem;color:var(--green-mid);margin-top:1px">P:${f.protein}g C:${f.carb}g F:${f.fat}g</div>
    </div>
  `).join('');
}

function quickAdd(name) {
    selectedFood = FOOD_DB.find(f => f.name === name);
    document.getElementById('food-search').value = name;
    document.getElementById('food-suggestions').style.display = 'none';
    addFoodLog();
}

// Close suggestions on outside click
document.addEventListener('click', function (e) {
    if (!e.target.closest('.kcal-search-wrap')) {
        document.getElementById('food-suggestions').style.display = 'none';
    }
});

// Init
renderExerciseGrid('all');
renderQuickAdd('all');
