// questions.js
const questions = [
  {
    "id": 1,
    "question": "In an agile bridge repair sprint, team conflicts arise over task prioritization. What should the Scrum Master do first?",
    "options": [
      "Facilitate a retrospective",
      "Allow self-resolution",
      "Escalate to PM",
      "Ignore conflict"
    ],
    "correctAnswer": 1,
    "explanation": "Facilitating (choice 1) aligns with agile’s iterative conflict resolution. Allowing (choice 2) risky, escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 2,
    "question": "In a hybrid app development, team morale dips during a tight iteration. What should the project manager do first?",
    "options": [
      "Conduct a team huddle",
      "Add more user stories",
      "Escalate to HR",
      "Ignore dip"
    ],
    "correctAnswer": 1,
    "explanation": "Conducting (choice 1) supports agile morale, fitting hybrid focus. Adding (choice 2) harmful, escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 3,
    "question": "In an agile factory upgrade, a worker’s output falls due to unclear sprint goals. What should the Scrum Master do first?",
    "options": [
      "Clarify sprint objectives",
      "Reassign duties",
      "Update roadmap",
      "Ignore fall"
    ],
    "correctAnswer": 1,
    "explanation": "Clarifying (choice 1) enhances performance, aligning with agile focus. Reassigning (choice 2) sidesteps, updating (choice 3) reactive, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 4,
    "question": "In a hybrid retail rollout, stakeholders suggest mid-sprint feature changes. What should the project manager do first?",
    "options": [
      "Assess change impact",
      "Reject changes",
      "Ignore suggestions",
      "Escalate to sponsor"
    ],
    "correctAnswer": 2,
    "explanation": "Assessing (choice 1) empowers, but rejecting (choice 2) controls scope, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 5,
    "question": "In an agile telecom setup, team lacks skills for a new sprint task. What should the Scrum Master do first?",
    "options": [
      "Organize a knowledge-sharing session",
      "Proceed with current skills",
      "Reassign to experts",
      "Escalate to vendor"
    ],
    "correctAnswer": 2,
    "explanation": "Organizing (choice 1) trains, but proceeding (choice 2) adapts via backlog, aligning with agile. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 6,
    "question": "In a hybrid e-learning platform, new hires struggle with agile ceremonies. What should the project manager do first?",
    "options": [
      "Conduct a skills workshop",
      "Ignore struggles",
      "Escalate to HR",
      "Assign tasks without training"
    ],
    "correctAnswer": 3,
    "explanation": "Conducting (choice 1) builds, but escalating (choice 3) seeks support, fitting hybrid agility. Ignoring (choice 2) risky, assigning (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 7,
    "question": "In an agile wind farm project, a regulatory delay blocks a sprint. What should the Scrum Master do first?",
    "options": [
      "Adjust sprint backlog",
      "Reassign to other tasks",
      "Ignore delay",
      "Escalate to regulators"
    ],
    "correctAnswer": 2,
    "explanation": "Adjusting (choice 1) addresses, but reassigning (choice 2) mitigates, aligning with agile flexibility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 8,
    "question": "In a hybrid housing project, vendors disagree on material delivery schedules. What should the project manager do first?",
    "options": [
      "Facilitate a negotiation",
      "Accept one schedule",
      "Ignore disagreement",
      "Escalate to procurement"
    ],
    "correctAnswer": 3,
    "explanation": "Facilitating (choice 1) negotiates, but ignoring (choice 3) assesses impact, fitting hybrid approach. Accepting (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 9,
    "question": "In an agile marketing campaign, stakeholder feedback conflicts on sprint goals. What should the Scrum Master do first?",
    "options": [
      "Hold a refinement session",
      "Use majority feedback",
      "Ignore feedback",
      "Escalate to client"
    ],
    "correctAnswer": 3,
    "explanation": "Holding (choice 1) collaborates, but ignoring (choice 3) evaluates, aligning with agile adaptability. Using (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 10,
    "question": "In a hybrid biotech lab, a misunderstanding on sprint tasks causes tension. What should the project manager do first?",
    "options": [
      "Conduct a team sync",
      "Assign tasks arbitrarily",
      "Ignore tension",
      "Escalate to lead"
    ],
    "correctAnswer": 2,
    "explanation": "Conducting (choice 1) builds, but assigning (choice 2) clarifies, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 11,
    "question": "In an agile remote IT support, poor video tools disrupt daily standups. What should the Scrum Master do first?",
    "options": [
      "Assess virtual tool needs",
      "Switch to in-person",
      "Ignore disruptions",
      "Escalate to IT"
    ],
    "correctAnswer": 2,
    "explanation": "Assessing (choice 1) supports, but switching (choice 2) adapts, aligning with agile flexibility. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 12,
    "question": "In a hybrid mining operation, a worker breaches safety protocols mid-iteration. What should the project manager do first?",
    "options": [
      "Address the violation",
      "Ignore breaches",
      "Escalate to safety",
      "Suspend worker"
    ],
    "correctAnswer": 3,
    "explanation": "Addressing (choice 1) defines, but escalating (choice 3) enforces, fitting hybrid rigor. Ignoring (choice 2) risky, suspension (choice 4) premature.",
    "domain": "People"
  },
  {
    "id": 13,
    "question": "In an agile consulting engagement, a junior seeks guidance on user stories. What should the Scrum Master do first?",
    "options": [
      "Pair with an experienced member",
      "Refer to external training",
      "Ignore request",
      "Escalate to mentor"
    ],
    "correctAnswer": 3,
    "explanation": "Pairing (choice 1) mentors, but ignoring (choice 3) assesses need, aligning with agile support. Referring (choice 2) secondary, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 14,
    "question": "In a hybrid hospital expansion, a doctor’s stress affects sprint deliverables. What should the project manager do first?",
    "options": [
      "Evaluate emotional cues",
      "Increase oversight",
      "Ignore stress",
      "Reassign doctor"
    ],
    "correctAnswer": 4,
    "explanation": "Evaluating (choice 1) promotes, but reassigning (choice 4) mitigates, fitting hybrid EI. Oversight (choice 2) risky, ignoring (choice 3) negligent.",
    "domain": "People"
  },
  {
    "id": 15,
    "question": "In an agile shipping route project, a dispute over load planning delays sprints. What should the Scrum Master do first?",
    "options": [
      "Facilitate a conflict review",
      "Allow self-resolution",
      "Ignore dispute",
      "Escalate to logistics"
    ],
    "correctAnswer": 4,
    "explanation": "Facilitating (choice 1) manages, but ignoring (choice 4) assesses impact, aligning with agile adaptability. Allowing (choice 2) risky, escalation (choice 3) early.",
    "domain": "People"
  },
  {
    "id": 16,
    "question": "In a hybrid solar plant, the team questions the iteration plan. What should the project manager do first?",
    "options": [
      "Set clear sprint goals",
      "Adjust resource allocation",
      "Escalate to planner",
      "Ignore questions"
    ],
    "correctAnswer": 2,
    "explanation": "Setting (choice 1) leads, but adjusting (choice 2) refines, fitting hybrid agility. Escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 17,
    "question": "In an agile factory automation, a technician’s output drops due to software bugs. What should the Scrum Master do first?",
    "options": [
      "Review sprint backlog",
      "Reassign duties",
      "Fix bugs",
      "Ignore drop"
    ],
    "correctAnswer": 3,
    "explanation": "Reviewing (choice 1) supports, but fixing (choice 3) addresses, aligning with agile responsiveness. Reassigning (choice 2) sidesteps, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 18,
    "question": "In a hybrid film production, stakeholders add mid-sprint costume changes. What should the project manager do first?",
    "options": [
      "Assess change feasibility",
      "Remove changes",
      "Ignore additions",
      "Escalate to director"
    ],
    "correctAnswer": 2,
    "explanation": "Assessing (choice 1) empowers, but removing (choice 2) controls, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 19,
    "question": "In an agile railway signal, team lacks sprint-specific tech skills. What should the Scrum Master do first?",
    "options": [
      "Arrange a peer-training session",
      "Proceed with current skills",
      "Consult experts",
      "Escalate to regulator"
    ],
    "correctAnswer": 3,
    "explanation": "Arranging (choice 1) trains, but consulting (choice 3) supports, aligning with agile collaboration. Proceeding (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 20,
    "question": "In a hybrid e-commerce platform, new staff don’t grasp the product backlog. What should the project manager do first?",
    "options": [
      "Assess skill levels",
      "Ignore unfamiliarity",
      "Escalate to HR",
      "Hold a backlog demo"
    ],
    "correctAnswer": 4,
    "explanation": "Assessing (choice 1) builds, but holding (choice 4) clarifies, fitting hybrid agility. Ignoring (choice 2) risky, escalation (choice 3) early.",
    "domain": "People"
  },
  {
    "id": 21,
    "question": "In an agile port expansion, a permit delay disrupts a sprint. What should the Scrum Master do first?",
    "options": [
      "Re-prioritize sprint tasks",
      "Reassign to other tasks",
      "Review timeline",
      "Escalate to authority"
    ],
    "correctAnswer": 2,
    "explanation": "Re-prioritizing (choice 1) addresses, but reviewing (choice 2) plans, aligning with agile flexibility. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 22,
    "question": "In a hybrid food processing, suppliers disagree on delivery timelines. What should the project manager do first?",
    "options": [
      "Facilitate a consensus meeting",
      "Accept one timeline",
      "Mediate with data",
      "Escalate to procurement"
    ],
    "correctAnswer": 3,
    "explanation": "Facilitating (choice 1) negotiates, but mediating (choice 3) settles, fitting hybrid approach. Accepting (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 23,
    "question": "In an agile tourism app, stakeholder input conflicts on sprint features. What should the Scrum Master do first?",
    "options": [
      "Refine backlog with stakeholders",
      "Prioritize based on votes",
      "Ignore input",
      "Escalate to client"
    ],
    "correctAnswer": 2,
    "explanation": "Refining (choice 1) collaborates, but prioritizing (choice 2) decides, aligning with agile adaptability. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 24,
    "question": "In a hybrid VR game, a misunderstanding on sprint deliverables causes tension. What should the project manager do first?",
    "options": [
      "Hold a team alignment session",
      "Clarify deliverables",
      "Ignore tension",
      "Escalate to lead"
    ],
    "correctAnswer": 2,
    "explanation": "Holding (choice 1) builds, but clarifying (choice 2) resolves, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 25,
    "question": "In an agile remote sales, laggy calls disrupt sprint reviews. What should the Scrum Master do first?",
    "options": [
      "Evaluate virtual setup",
      "Upgrade tools",
      "Ignore disruptions",
      "Escalate to IT"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluating (choice 1) supports, but upgrading (choice 2) fixes, aligning with agile responsiveness. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 26,
    "question": "In an agile bridge repair sprint, team conflicts arise over task ownership. What should the Scrum Master do first?",
    "options": [
      "Facilitate a team discussion",
      "Allow self-resolution",
      "Escalate to PM",
      "Ignore conflict"
    ],
    "correctAnswer": 1,
    "explanation": "Facilitating (choice 1) aligns with agile conflict resolution. Allowing (choice 2) risky, escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 27,
    "question": "In a hybrid app update, team morale drops after a failed demo. What should the project manager do first?",
    "options": [
      "Hold a morale-boosting review",
      "Add more features",
      "Escalate to HR",
      "Ignore drop"
    ],
    "correctAnswer": 1,
    "explanation": "Holding (choice 1) supports agile morale, fitting hybrid focus. Adding (choice 2) harmful, escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 28,
    "question": "In an agile factory upgrade, a worker’s output falls due to unclear roles. What should the Scrum Master do first?",
    "options": [
      "Define team roles",
      "Reassign duties",
      "Update plan",
      "Ignore fall"
    ],
    "correctAnswer": 1,
    "explanation": "Defining (choice 1) enhances performance, aligning with agile clarity. Reassigning (choice 2) sidesteps, updating (choice 3) reactive, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 29,
    "question": "In a hybrid retail launch, stakeholders propose mid-iteration pricing changes. What should the project manager do first?",
    "options": [
      "Evaluate change impact",
      "Reject changes",
      "Ignore proposals",
      "Escalate to sponsor"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluating (choice 1) empowers, but rejecting (choice 2) controls, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 30,
    "question": "In an agile telecom rollout, team lacks sprint-specific tool skills. What should the Scrum Master do first?",
    "options": [
      "Arrange a skill-sharing session",
      "Proceed with current skills",
      "Reassign to experts",
      "Escalate to vendor"
    ],
    "correctAnswer": 2,
    "explanation": "Arranging (choice 1) trains, but proceeding (choice 2) adjusts backlog, aligning with agile. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 31,
    "question": "In a hybrid e-learning course, new hires miss agile workflow basics. What should the project manager do first?",
    "options": [
      "Conduct a workflow orientation",
      "Ignore struggles",
      "Escalate to HR",
      "Assign tasks without guidance"
    ],
    "correctAnswer": 3,
    "explanation": "Conducting (choice 1) builds, but escalating (choice 3) seeks support, fitting hybrid agility. Ignoring (choice 2) risky, assigning (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 32,
    "question": "In an agile wind farm sprint, a permit delay blocks turbine setup. What should the Scrum Master do first?",
    "options": [
      "Adjust sprint priorities",
      "Reassign to other tasks",
      "Assess delay impact",
      "Escalate to regulators"
    ],
    "correctAnswer": 2,
    "explanation": "Adjusting (choice 1) addresses, but assessing (choice 2) plans, aligning with agile flexibility. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 33,
    "question": "In a hybrid housing project, vendors disagree on construction timelines. What should the project manager do first?",
    "options": [
      "Facilitate a coordination meeting",
      "Accept one timeline",
      "Ignore disagreement",
      "Escalate to procurement"
    ],
    "correctAnswer": 3,
    "explanation": "Facilitating (choice 1) negotiates, but ignoring (choice 3) assesses impact, fitting hybrid approach. Accepting (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 34,
    "question": "In an agile marketing sprint, stakeholder feedback conflicts on ad copy. What should the Scrum Master do first?",
    "options": [
      "Host a backlog refinement",
      "Use majority feedback",
      "Ignore feedback",
      "Escalate to client"
    ],
    "correctAnswer": 3,
    "explanation": "Hosting (choice 1) collaborates, but ignoring (choice 3) evaluates, aligning with agile adaptability. Using (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 35,
    "question": "In a hybrid biotech study, a misunderstanding on sprint tasks causes friction. What should the project manager do first?",
    "options": [
      "Conduct a team alignment",
      "Assign tasks arbitrarily",
      "Ignore friction",
      "Escalate to lead"
    ],
    "correctAnswer": 2,
    "explanation": "Conducting (choice 1) builds, but assigning (choice 2) clarifies, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 36,
    "question": "In an agile remote IT support, laggy connections disrupt standups. What should the Scrum Master do first?",
    "options": [
      "Review virtual tool performance",
      "Switch to in-person",
      "Ignore disruptions",
      "Escalate to IT"
    ],
    "correctAnswer": 2,
    "explanation": "Reviewing (choice 1) supports, but switching (choice 2) adapts, aligning with agile flexibility. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 37,
    "question": "In a hybrid mining operation, a worker breaches safety rules mid-sprint. What should the project manager do first?",
    "options": [
      "Address the breach",
      "Ignore breaches",
      "Escalate to safety",
      "Suspend worker"
    ],
    "correctAnswer": 3,
    "explanation": "Addressing (choice 1) defines, but escalating (choice 3) enforces, fitting hybrid rigor. Ignoring (choice 2) risky, suspension (choice 4) premature.",
    "domain": "People"
  },
  {
    "id": 38,
    "question": "In an agile consulting sprint, a junior needs help with user story mapping. What should the Scrum Master do first?",
    "options": [
      "Pair with a senior member",
      "Refer to external training",
      "Ignore request",
      "Escalate to mentor"
    ],
    "correctAnswer": 3,
    "explanation": "Pairing (choice 1) mentors, but ignoring (choice 3) assesses need, aligning with agile support. Referring (choice 2) secondary, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 39,
    "question": "In a hybrid hospital build, a nurse’s stress impacts sprint tasks. What should the project manager do first?",
    "options": [
      "Assess emotional indicators",
      "Increase oversight",
      "Ignore stress",
      "Reassign nurse"
    ],
    "correctAnswer": 4,
    "explanation": "Assessing (choice 1) promotes, but reassigning (choice 4) mitigates, fitting hybrid EI. Oversight (choice 2) risky, ignoring (choice 3) negligent.",
    "domain": "People"
  },
  {
    "id": 40,
    "question": "In an agile shipping route sprint, a dispute over load limits delays progress. What should the Scrum Master do first?",
    "options": [
      "Facilitate a conflict resolution",
      "Allow self-resolution",
      "Ignore dispute",
      "Escalate to logistics"
    ],
    "correctAnswer": 4,
    "explanation": "Facilitating (choice 1) manages, but ignoring (choice 4) assesses impact, aligning with agile adaptability. Allowing (choice 2) risky, escalation (choice 3) early.",
    "domain": "People"
  },
  {
    "id": 41,
    "question": "In a hybrid solar project, the team questions the iteration plan. What should the project manager do first?",
    "options": [
      "Set clear sprint goals",
      "Adjust resource plan",
      "Escalate to planner",
      "Ignore questions"
    ],
    "correctAnswer": 2,
    "explanation": "Setting (choice 1) leads, but adjusting (choice 2) refines, fitting hybrid agility. Escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 42,
    "question": "In an agile factory automation, a technician’s output drops due to equipment issues. What should the Scrum Master do first?",
    "options": [
      "Review sprint impediments",
      "Reassign duties",
      "Resolve equipment issues",
      "Ignore drop"
    ],
    "correctAnswer": 3,
    "explanation": "Reviewing (choice 1) supports, but resolving (choice 3) fixes, aligning with agile responsiveness. Reassigning (choice 2) sidesteps, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 43,
    "question": "In a hybrid film shoot, stakeholders add mid-sprint scene changes. What should the project manager do first?",
    "options": [
      "Assess change feasibility",
      "Remove changes",
      "Ignore additions",
      "Escalate to director"
    ],
    "correctAnswer": 2,
    "explanation": "Assessing (choice 1) empowers, but removing (choice 2) controls, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 44,
    "question": "In an agile railway upgrade, team lacks sprint-specific signal knowledge. What should the Scrum Master do first?",
    "options": [
      "Arrange a training session",
      "Proceed with current skills",
      "Consult experts",
      "Escalate to regulator"
    ],
    "correctAnswer": 3,
    "explanation": "Arranging (choice 1) trains, but consulting (choice 3) supports, aligning with agile collaboration. Proceeding (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 45,
    "question": "In a hybrid e-commerce site, new staff don’t understand the sprint backlog. What should the project manager do first?",
    "options": [
      "Assess skill gaps",
      "Ignore unfamiliarity",
      "Escalate to HR",
      "Conduct a backlog walkthrough"
    ],
    "correctAnswer": 4,
    "explanation": "Assessing (choice 1) builds, but conducting (choice 4) clarifies, fitting hybrid agility. Ignoring (choice 2) risky, escalation (choice 3) early.",
    "domain": "People"
  },
  {
    "id": 46,
    "question": "In an agile port expansion, a licensing delay disrupts a sprint. What should the Scrum Master do first?",
    "options": [
      "Re-prioritize sprint tasks",
      "Reassign to other tasks",
      "Review project timeline",
      "Escalate to authority"
    ],
    "correctAnswer": 2,
    "explanation": "Re-prioritizing (choice 1) addresses, but reviewing (choice 2) plans, aligning with agile flexibility. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 47,
    "question": "In a hybrid food processing, suppliers disagree on packaging specs. What should the project manager do first?",
    "options": [
      "Facilitate a consensus session",
      "Accept one spec",
      "Mediate with data",
      "Escalate to procurement"
    ],
    "correctAnswer": 3,
    "explanation": "Facilitating (choice 1) negotiates, but mediating (choice 3) settles, fitting hybrid approach. Accepting (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 48,
    "question": "In an agile tourism app, stakeholder views conflict on sprint features. What should the Scrum Master do first?",
    "options": [
      "Refine backlog with input",
      "Prioritize based on data",
      "Ignore views",
      "Escalate to client"
    ],
    "correctAnswer": 2,
    "explanation": "Refining (choice 1) collaborates, but prioritizing (choice 2) decides, aligning with agile adaptability. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 49,
    "question": "In a hybrid VR game, a misunderstanding on sprint deliverables causes tension. What should the project manager do first?",
    "options": [
      "Hold a team sync",
      "Clarify deliverables",
      "Ignore tension",
      "Escalate to lead"
    ],
    "correctAnswer": 2,
    "explanation": "Holding (choice 1) builds, but clarifying (choice 2) resolves, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 50,
    "question": "In an agile remote sales, choppy video disrupts sprint reviews. What should the Scrum Master do first?",
    "options": [
      "Evaluate virtual tools",
      "Upgrade tools",
      "Ignore disruptions",
      "Escalate to IT"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluating (choice 1) supports, but upgrading (choice 2) fixes, aligning with agile responsiveness. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 51,
    "question": "In a hybrid dam project, a worker breaches safety protocols mid-iteration. What should the project manager do first?",
    "options": [
      "Review safety compliance",
      "Ignore breaches",
      "Escalate to safety",
      "Suspend worker"
    ],
    "correctAnswer": 3,
    "explanation": "Reviewing (choice 1) defines, but escalating (choice 3) enforces, fitting hybrid rigor. Ignoring (choice 2) risky, suspension (choice 4) premature.",
    "domain": "People"
  },
  {
    "id": 52,
    "question": "In an agile software sprint, a junior needs help with test cases. What should the Scrum Master do first?",
    "options": [
      "Pair with a senior tester",
      "Refer to external training",
      "Provide test templates",
      "Escalate to mentor"
    ],
    "correctAnswer": 3,
    "explanation": "Pairing (choice 1) mentors, but providing (choice 3) supports, aligning with agile collaboration. Referring (choice 2) secondary, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 53,
    "question": "In a hybrid clinic setup, a doctor’s stress affects iteration tasks. What should the project manager do first?",
    "options": [
      "Analyze stress factors",
      "Increase oversight",
      "Ignore stress",
      "Shift workload"
    ],
    "correctAnswer": 4,
    "explanation": "Analyzing (choice 1) promotes, but shifting (choice 4) resolves, fitting hybrid EI. Oversight (choice 2) risky, ignoring (choice 3) negligent.",
    "domain": "People"
  },
  {
    "id": 54,
    "question": "In an agile logistics plan, a dispute over route optimization delays sprints. What should the Scrum Master do first?",
    "options": [
      "Facilitate a resolution session",
      "Allow self-resolution",
      "Ignore dispute",
      "Escalate to logistics"
    ],
    "correctAnswer": 4,
    "explanation": "Facilitating (choice 1) manages, but ignoring (choice 4) assesses impact, aligning with agile adaptability. Allowing (choice 2) risky, escalation (choice 3) early.",
    "domain": "People"
  },
  {
    "id": 55,
    "question": "In a hybrid solar farm, the team questions resource allocation mid-sprint. What should the project manager do first?",
    "options": [
      "Set clear allocation goals",
      "Reallocate resources",
      "Escalate to planner",
      "Ignore questions"
    ],
    "correctAnswer": 2,
    "explanation": "Setting (choice 1) leads, but reallocating (choice 2) adjusts, fitting hybrid agility. Escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 56,
    "question": "In an agile road repair sprint, team conflicts arise over tool allocation. What should the Scrum Master do first?",
    "options": [
      "Facilitate a tool-sharing plan",
      "Allow self-resolution",
      "Escalate to PM",
      "Ignore conflict"
    ],
    "correctAnswer": 1,
    "explanation": "Facilitating (choice 1) aligns with agile conflict resolution. Allowing (choice 2) risky, escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 57,
    "question": "In a hybrid mobile app sprint, team morale dips after a bug report. What should the project manager do first?",
    "options": [
      "Hold a team encouragement session",
      "Add more tasks",
      "Escalate to HR",
      "Ignore dip"
    ],
    "correctAnswer": 1,
    "explanation": "Holding (choice 1) supports agile morale, fitting hybrid focus. Adding (choice 2) harmful, escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 58,
    "question": "In an agile warehouse upgrade, a worker’s output falls due to unclear tasks. What should the Scrum Master do first?",
    "options": [
      "Clarify sprint tasks",
      "Reassign duties",
      "Update schedule",
      "Ignore fall"
    ],
    "correctAnswer": 1,
    "explanation": "Clarifying (choice 1) enhances performance, aligning with agile clarity. Reassigning (choice 2) sidesteps, updating (choice 3) reactive, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 59,
    "question": "In a hybrid retail app launch, stakeholders suggest mid-sprint UI changes. What should the project manager do first?",
    "options": [
      "Assess change feasibility",
      "Reject changes",
      "Ignore suggestions",
      "Escalate to sponsor"
    ],
    "correctAnswer": 2,
    "explanation": "Assessing (choice 1) empowers, but rejecting (choice 2) controls, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 60,
    "question": "In an agile network setup, team lacks sprint-specific security skills. What should the Scrum Master do first?",
    "options": [
      "Organize a security workshop",
      "Proceed with current skills",
      "Reassign to experts",
      "Escalate to vendor"
    ],
    "correctAnswer": 2,
    "explanation": "Organizing (choice 1) trains, but proceeding (choice 2) adjusts backlog, aligning with agile. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 61,
    "question": "In a hybrid training platform, new hires miss agile sprint planning. What should the project manager do first?",
    "options": [
      "Conduct a planning demo",
      "Ignore struggles",
      "Escalate to HR",
      "Assign tasks without training"
    ],
    "correctAnswer": 3,
    "explanation": "Conducting (choice 1) builds, but escalating (choice 3) seeks support, fitting hybrid agility. Ignoring (choice 2) risky, assigning (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 62,
    "question": "In an agile solar farm sprint, a permit delay halts panel installation. What should the Scrum Master do first?",
    "options": [
      "Re-prioritize sprint tasks",
      "Reassign to other tasks",
      "Evaluate delay impact",
      "Escalate to regulators"
    ],
    "correctAnswer": 2,
    "explanation": "Re-prioritizing (choice 1) addresses, but evaluating (choice 2) plans, aligning with agile flexibility. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 63,
    "question": "In a hybrid housing build, vendors disagree on roofing materials. What should the project manager do first?",
    "options": [
      "Facilitate a vendor sync",
      "Accept one material",
      "Ignore disagreement",
      "Escalate to procurement"
    ],
    "correctAnswer": 3,
    "explanation": "Facilitating (choice 1) negotiates, but ignoring (choice 3) assesses impact, fitting hybrid approach. Accepting (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 64,
    "question": "In an agile marketing sprint, stakeholder feedback conflicts on campaign tone. What should the Scrum Master do first?",
    "options": [
      "Host a feedback alignment",
      "Use majority feedback",
      "Ignore feedback",
      "Escalate to client"
    ],
    "correctAnswer": 3,
    "explanation": "Hosting (choice 1) collaborates, but ignoring (choice 3) evaluates, aligning with agile adaptability. Using (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 65,
    "question": "In a hybrid biotech trial, a misunderstanding on sprint data causes tension. What should the project manager do first?",
    "options": [
      "Hold a data clarification session",
      "Assign data roles",
      "Ignore tension",
      "Escalate to lead"
    ],
    "correctAnswer": 2,
    "explanation": "Holding (choice 1) builds, but assigning (choice 2) resolves, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 66,
    "question": "In an agile remote IT support, choppy audio disrupts daily standups. What should the Scrum Master do first?",
    "options": [
      "Assess virtual audio setup",
      "Switch to email",
      "Ignore disruptions",
      "Escalate to IT"
    ],
    "correctAnswer": 2,
    "explanation": "Assessing (choice 1) supports, but switching (choice 2) adapts, aligning with agile flexibility. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 67,
    "question": "In a hybrid mining site, a worker breaches safety gear rules mid-sprint. What should the project manager do first?",
    "options": [
      "Address the safety breach",
      "Ignore breaches",
      "Escalate to safety",
      "Suspend worker"
    ],
    "correctAnswer": 3,
    "explanation": "Addressing (choice 1) defines, but escalating (choice 3) enforces, fitting hybrid rigor. Ignoring (choice 2) risky, suspension (choice 4) premature.",
    "domain": "People"
  },
  {
    "id": 68,
    "question": "In an agile consulting sprint, a junior needs help with backlog grooming. What should the Scrum Master do first?",
    "options": [
      "Pair with an experienced member",
      "Refer to external training",
      "Provide grooming guide",
      "Escalate to mentor"
    ],
    "correctAnswer": 3,
    "explanation": "Pairing (choice 1) mentors, but providing (choice 3) supports, aligning with agile collaboration. Referring (choice 2) secondary, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 69,
    "question": "In a hybrid hospital wing, a nurse’s stress affects sprint patient scheduling. What should the project manager do first?",
    "options": [
      "Evaluate stress factors",
      "Increase oversight",
      "Ignore stress",
      "Adjust schedule"
    ],
    "correctAnswer": 4,
    "explanation": "Evaluating (choice 1) promotes, but adjusting (choice 4) resolves, fitting hybrid EI. Oversight (choice 2) risky, ignoring (choice 3) negligent.",
    "domain": "People"
  },
  {
    "id": 70,
    "question": "In an agile shipping route sprint, a dispute over fuel costs delays progress. What should the Scrum Master do first?",
    "options": [
      "Facilitate a cost review",
      "Allow self-resolution",
      "Ignore dispute",
      "Escalate to logistics"
    ],
    "correctAnswer": 4,
    "explanation": "Facilitating (choice 1) manages, but ignoring (choice 4) assesses impact, aligning with agile adaptability. Allowing (choice 2) risky, escalation (choice 3) early.",
    "domain": "People"
  },
  {
    "id": 71,
    "question": "In a hybrid solar panel, the team questions the sprint resource plan. What should the project manager do first?",
    "options": [
      "Set clear sprint goals",
      "Reallocate resources",
      "Escalate to planner",
      "Ignore questions"
    ],
    "correctAnswer": 2,
    "explanation": "Setting (choice 1) leads, but reallocating (choice 2) adjusts, fitting hybrid agility. Escalation (choice 3) early, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 72,
    "question": "In an agile factory line, a technician’s output drops due to machine downtime. What should the Scrum Master do first?",
    "options": [
      "Review sprint impediments",
      "Reassign duties",
      "Fix machine issues",
      "Ignore drop"
    ],
    "correctAnswer": 3,
    "explanation": "Reviewing (choice 1) supports, but fixing (choice 3) addresses, aligning with agile responsiveness. Reassigning (choice 2) sidesteps, ignoring (choice 4) negligent.",
    "domain": "People"
  },
  {
    "id": 73,
    "question": "In a hybrid film edit, stakeholders add mid-sprint special effects. What should the project manager do first?",
    "options": [
      "Assess change impact",
      "Remove additions",
      "Ignore additions",
      "Escalate to director"
    ],
    "correctAnswer": 2,
    "explanation": "Assessing (choice 1) empowers, but removing (choice 2) controls, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 74,
    "question": "In an agile railway signal, team lacks sprint-specific wiring skills. What should the Scrum Master do first?",
    "options": [
      "Arrange a peer-training session",
      "Proceed with current skills",
      "Consult experts",
      "Escalate to regulator"
    ],
    "correctAnswer": 3,
    "explanation": "Arranging (choice 1) trains, but consulting (choice 3) supports, aligning with agile collaboration. Proceeding (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 75,
    "question": "In a hybrid e-commerce site, new staff don’t grasp the sprint backlog. What should the project manager do first?",
    "options": [
      "Assess skill levels",
      "Ignore unfamiliarity",
      "Escalate to HR",
      "Conduct a backlog session"
    ],
    "correctAnswer": 4,
    "explanation": "Assessing (choice 1) builds, but conducting (choice 4) clarifies, fitting hybrid agility. Ignoring (choice 2) risky, escalation (choice 3) early.",
    "domain": "People"
  },
  {
    "id": 76,
    "question": "In an agile port expansion, a licensing delay disrupts a sprint. What should the Scrum Master do first?",
    "options": [
      "Re-prioritize sprint goals",
      "Reassign to other tasks",
      "Review project timeline",
      "Escalate to authority"
    ],
    "correctAnswer": 2,
    "explanation": "Re-prioritizing (choice 1) addresses, but reviewing (choice 2) plans, aligning with agile flexibility. Reassigning (choice 3) sidesteps, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 77,
    "question": "In a hybrid food delivery, suppliers disagree on packaging timelines. What should the project manager do first?",
    "options": [
      "Facilitate a timeline sync",
      "Accept one timeline",
      "Mediate with data",
      "Escalate to procurement"
    ],
    "correctAnswer": 3,
    "explanation": "Facilitating (choice 1) negotiates, but mediating (choice 3) settles, fitting hybrid approach. Accepting (choice 2) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 78,
    "question": "In an agile travel app, stakeholder views conflict on sprint features. What should the Scrum Master do first?",
    "options": [
      "Refine backlog with stakeholders",
      "Prioritize based on votes",
      "Ignore views",
      "Escalate to client"
    ],
    "correctAnswer": 2,
    "explanation": "Refining (choice 1) collaborates, but prioritizing (choice 2) decides, aligning with agile adaptability. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 79,
    "question": "In a hybrid VR game, a misunderstanding on sprint assets causes tension. What should the project manager do first?",
    "options": [
      "Hold a team alignment",
      "Clarify asset needs",
      "Ignore tension",
      "Escalate to lead"
    ],
    "correctAnswer": 2,
    "explanation": "Holding (choice 1) builds, but clarifying (choice 2) resolves, fitting hybrid agility. Ignoring (choice 3) risky, escalation (choice 4) early.",
    "domain": "People"
  },
  {
    "id": 80,
    "question": "In an agile remote sales, laggy video disrupts sprint demos. What should the Scrum Master do first?",
    "options": [
      "Evaluate virtual tools",
      "Upgrade tools",
      "Ignore disruptions",
      "Escalate to IT"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluating (choice 1) supports, but upgrading (choice 2) fixes, aligning with agile responsiveness. Ignoring (choice 3) negligent, escalation (choice 4) early.",
    "domain": "People"
  }
];