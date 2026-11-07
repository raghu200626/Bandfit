// Test kinematic model for all 12 exercises
const EXERCISES_ID = [
  'bicep-curl', 'squat', 'chest-press', 'lat-pulldown',
  'shoulder-press', 'deadlift', 'tricep-extension', 'glute-bridge',
  'face-pull', 'plank-row', 'band-pull-apart', 'standing-row'
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function getPoseData(id, t) {
  // t is between 0 (start) and 1 (peak contraction)
  // Clamp t
  t = Math.max(0, Math.min(1, t));

  switch (id) {
    case 'bicep-curl': {
      // Front view standing tall
      // Torso & head
      const head = { cx: 100, cy: 30, r: 12 };
      const neck = { x: 100, y: 44 };
      const hips = { x: 100, y: 114 };
      // Legs
      const leftFoot = { x: 80, y: 182 };
      const rightFoot = { x: 120, y: 182 };
      const leftKnee = { x: 86, y: 148 };
      const rightKnee = { x: 114, y: 148 };
      // Shoulders & fixed elbows
      const leftShoulder = { x: 78, y: 56 };
      const rightShoulder = { x: 122, y: 56 };
      const leftElbow = { x: 74, y: 94 };
      const rightElbow = { x: 126, y: 94 };
      // Forearms & hands: elbow flexes upward in arc
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
        `M 68 182 L 132 182`, // under feet
        `M 80 182 L ${leftHand.x} ${leftHand.y}`,
        `M 120 182 L ${rightHand.x} ${rightHand.y}`
      ];
      return {
        cue: t > 0.8 ? 'Squeeze Biceps at Peak!' : (t > 0.3 ? 'Curl Up - Elbows Pinned' : 'Extend Arms Slowly Down'),
        head, neck, hips,
        leftFoot, rightFoot, leftKnee, rightKnee,
        leftShoulder, rightShoulder, leftElbow, rightElbow,
        leftHand, rightHand, bands,
        view: 'front'
      };
    }

    case 'squat': {
      // 3/4 view
      const leftFoot = { x: 72, y: 182 };
      const rightFoot = { x: 128, y: 182 };
      const hipX = lerp(96, 80, t);
      const hipY = lerp(110, 144, t);
      const leftKnee = { x: lerp(86, 64, t), y: lerp(148, 154, t) };
      const rightKnee = { x: lerp(116, 110, t), y: lerp(148, 154, t) };
      // Torso hinges forward
      const neck = { x: lerp(98, 90, t), y: lerp(48, 88, t) };
      const head = { cx: lerp(98, 92, t), cy: lerp(30, 70, t), r: 12 };
      const shoulderL = { x: neck.x - 16, y: neck.y + 8 };
      const shoulderR = { x: neck.x + 18, y: neck.y + 8 };
      // Hands stay racked at shoulder height
      const leftHand = { x: shoulderL.x - 2, y: shoulderL.y + 2 };
      const rightHand = { x: shoulderR.x + 2, y: shoulderR.y + 2 };
      const leftElbow = { x: shoulderL.x - 4, y: shoulderL.y + 18 };
      const rightElbow = { x: shoulderR.x + 4, y: shoulderR.y + 18 };
      const bands = [
        `M 62 182 L 138 182`,
        `M 72 182 L ${leftHand.x} ${leftHand.y}`,
        `M 128 182 L ${rightHand.x} ${rightHand.y}`
      ];
      return {
        cue: t > 0.8 ? 'Thighs Parallel - Drive Up!' : (t > 0.3 ? 'Hips Back, Knees Track Toes' : 'Stand Tall, Brace Core'),
        head, neck, hips: { x: hipX, y: hipY },
        leftFoot, rightFoot, leftKnee, rightKnee,
        leftShoulder: shoulderL, rightShoulder: shoulderR,
        leftElbow, rightElbow, leftHand, rightHand, bands,
        view: 'front-squat'
      };
    }

    case 'chest-press': {
      // Side profile facing right! Solid wall anchor behind on left
      const anchor = { x: 16, y: 78 };
      const backFoot = { x: 52, y: 182 };
      const frontFoot = { x: 120, y: 182 };
      const backKnee = { x: 68, y: 148 };
      const frontKnee = { x: 114, y: 148 };
      const hips = { x: 82, y: 116 };
      // Torso leans slightly into press
      const torsoLean = t * 6;
      const neck = { x: 92 + torsoLean, y: 56 };
      const head = { cx: 98 + torsoLean, cy: 34, r: 12 };
      const shoulder = { x: 92 + torsoLean, y: 64 };
      // Arm extends forward smoothly!
      const elbowX = lerp(66, 122, t);
      const elbowY = lerp(78, 70, t);
      const handX = lerp(90, 156, t);
      const handY = lerp(80, 70, t);
      // Clean, solid, continuous resistance band from rear anchor to hand!
      const ctrlX = Math.round(anchor.x + (handX - anchor.x) * 0.45);
      const ctrlY = Math.round(anchor.y + (handY - anchor.y) * 0.25);
      const bands = [
        `M ${anchor.x} ${anchor.y} Q ${ctrlX} ${ctrlY} ${Math.round(handX)} ${Math.round(handY)}`
      ];
      return {
        cue: t > 0.8 ? 'Peak Chest Squeeze & Lockout!' : (t > 0.3 ? 'Press Forward with Chest' : 'Controlled Return - Feel Stretch'),
        anchor, head, neck, hips,
        backFoot, frontFoot, backKnee, frontKnee,
        shoulder, elbow: { x: elbowX, y: elbowY },
        hand: { x: handX, y: handY },
        bands,
        view: 'side-press'
      };
    }

    case 'lat-pulldown': {
      // Front view kneeling/seated, overhead anchor
      const anchor = { x: 100, y: 12 };
      const knees = [{ x: 76, y: 180 }, { x: 124, y: 180 }];
      const hips = { x: 100, y: 144 };
      const neck = { x: lerp(100, 98, t), y: lerp(80, 84, t) };
      const head = { cx: lerp(100, 96, t), cy: lerp(58, 62, t), r: 12 };
      const shoulderL = { x: 78, y: neck.y };
      const shoulderR = { x: 122, y: neck.y };
      // Arms pull down and elbows drive to ribs
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
        anchor, head, neck, hips, knees,
        shoulderL, shoulderR, elbowL, elbowR, handL, handR, bands,
        view: 'front-lat'
      };
    }

    case 'shoulder-press': {
      // Front view standing
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
        cue: t > 0.8 ? 'Overhead Lockout - Ribs Down!' : (t > 0.3 ? 'Press Straight Up Overhead' : 'Lower with Control to Shoulders'),
        head, neck, hips, feet,
        shoulderL, shoulderR, elbowL, elbowR, handL, handR, bands,
        view: 'front-press'
      };
    }

    case 'deadlift': {
      // Side profile hip hinge
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
      // Side/3/4 profile standing
      const foot = { x: 84, y: 182 };
      const hips = { x: 84, y: 114 };
      const neck = { x: 88, y: 54 };
      const head = { cx: 90, cy: 32, r: 12 };
      const shoulder = { x: 88, y: 56 };
      // Upper arm fixed pointing straight UP
      const elbow = { x: 86, y: 22 };
      // Forearm extends overhead
      const handX = lerp(62, 88, t);
      const handY = lerp(52, 8, t);
      const bands = [
        `M 72 120 L ${Math.round(handX)} ${Math.round(handY)}`
      ];
      return {
        cue: t > 0.8 ? 'Triceps Fully Contracted!' : (t > 0.3 ? 'Extend Up - Keep Elbows Fixed' : 'Control Lower Behind Head'),
        head, neck, hips, foot, shoulder, elbow,
        hand: { x: handX, y: handY },
        bands,
        view: 'side-tricep'
      };
    }

    case 'glute-bridge': {
      // Side profile lying
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
        head, neck, shoulder, foot,
        hips: { x: hipX, y: hipY },
        knee: { x: kneeX, y: kneeY },
        hand, bands,
        view: 'side-bridge'
      };
    }

    case 'face-pull': {
      // Side profile facing left
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
        anchor, head, neck, hips, feet,
        shoulder, elbow, hand, bands,
        view: 'side-facepull'
      };
    }

    case 'plank-row': {
      // Horizontal plank
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
        anchor, head, hips, shoulder, supportHand,
        foot, elbow: rowElbow, hand: rowHand, bands,
        view: 'side-plank'
      };
    }

    case 'band-pull-apart': {
      // Front view arms opening wide
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
        head, neck, hips, feet,
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
      // Side profile facing left
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
        anchor, head, neck, hips, knee, foot,
        shoulder, elbow, hand, bands,
        view: 'side-row'
      };
    }
  }
}

// Test all
EXERCISES_ID.forEach(id => {
  [0, 0.5, 1].forEach(prog => {
    const data = getPoseData(id, prog);
    if (!data) throw new Error('Missing data for ' + id);
    if (!data.bands || !data.bands.length) throw new Error('Missing bands for ' + id);
  });
});
console.log('All 12 exercises tested successfully at t=0, 0.5, 1.0!');

module.exports = { getPoseData };
