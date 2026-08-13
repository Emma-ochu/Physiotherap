export type Service = {
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  heroDescription: string;
  overview: string;
  whoWeHelp: string[];
  conditions: string[];
  treatmentApproach: string[];
  benefits: string[];
};

export const services: Service[] = [

  {
  number: "01",
  title: "Musculoskeletal Physiotherapy",
  slug: "musculoskeletal",

    shortDescription:
      "Assessment and treatment for pain, stiffness, movement restrictions, and everyday musculoskeletal conditions.",

    heroDescription:
      "Physiotherapy focused on reducing pain, restoring movement, improving strength, and helping you return to your everyday activities.",

    overview:
      "Musculoskeletal physiotherapy focuses on conditions affecting the muscles, joints, bones, tendons, and ligaments. At DE-INES, treatment begins with understanding your symptoms, movement, physical demands, and recovery goals. Your physiotherapist can then develop an individualised treatment and rehabilitation programme suited to your needs.",

    whoWeHelp: [
      "People experiencing back or neck pain",
      "People with joint or muscle pain",
      "People recovering from muscle or tendon injuries",
      "People experiencing stiffness or restricted movement",
      "People living with arthritis or ongoing joint problems",
      "People experiencing headaches related to musculoskeletal problems",
    ],

    conditions: [
      "Back and neck pain",
      "Shoulder pain",
      "Knee and ankle problems",
      "Muscle and tendon injuries",
      "Arthritis and joint pain",
      "Headaches and migraines",
    ],

    treatmentApproach: [
      "Initial assessment of your symptoms and movement",
      "Identification of factors contributing to your condition",
      "Hands-on physiotherapy where appropriate",
      "Individualised exercise and strengthening programmes",
      "Movement and activity advice",
      "Progressive rehabilitation based on your goals",
    ],

    benefits: [
      "Reduced pain and discomfort",
      "Improved movement and flexibility",
      "Greater strength and physical function",
      "Improved confidence with everyday activities",
      "Better understanding of your condition",
      "A structured pathway toward recovery",
    ],
  },

  {
  number: "02",
  title: "Sports Physiotherapy",
  slug: "sports",
  
  

    shortDescription:
      "Specialist physiotherapy for athletes and active people recovering from injury and returning to sport.",

    heroDescription:
      "Whether you are a competitive athlete or simply enjoy staying active, sports physiotherapy can help you recover from injury and return to the activities you love.",

    overview:
      "Sports physiotherapy focuses on the prevention, assessment, treatment, and rehabilitation of injuries affecting active people. Treatment is designed around your sport, activity level, injury, physical demands, and return-to-activity goals.",

    whoWeHelp: [
      "Competitive athletes",
      "Recreational sports participants",
      "Runners and active adults",
      "People recovering from sports injuries",
      "People returning to sport after surgery",
      "People looking to reduce their risk of future injury",
    ],

    conditions: [
      "Sports injuries",
      "Muscle strains",
      "Ligament injuries",
      "Running injuries",
      "Ankle sprains",
      "Return-to-sport rehabilitation",
    ],

    treatmentApproach: [
      "Detailed assessment of the injury and physical demands",
      "Pain and movement management",
      "Strength and conditioning exercises",
      "Sport-specific rehabilitation",
      "Balance and coordination training",
      "Progressive return-to-sport planning",
    ],

    benefits: [
      "Safe progression back to activity",
      "Improved strength and conditioning",
      "Better movement and performance",
      "Greater confidence after injury",
      "Reduced risk of reinjury",
      "A structured return-to-sport programme",
    ],
  },

  {
    number: "03",
    title: "Women's & Men's Pelvic Health",
    slug: "pelvic-health",

    shortDescription:
      "Physiotherapy support for pelvic health, pregnancy, postpartum recovery, and related conditions.",

    heroDescription:
      "Individualised pelvic health physiotherapy supporting people through pregnancy, postpartum recovery, pelvic pain, and other pelvic health concerns.",

    overview:
      "Pelvic health physiotherapy can support people experiencing problems involving the pelvic floor, pelvic region, bladder, bowel, or related muscles and movement. Care is individualised and may be particularly useful during pregnancy, following childbirth, or when pelvic symptoms affect daily life.",

    whoWeHelp: [
      "Women during pregnancy",
      "Women recovering after childbirth",
      "People experiencing pelvic pain",
      "People experiencing bladder or continence problems",
      "Men experiencing pelvic health concerns",
      "People requiring pelvic floor rehabilitation",
    ],

    conditions: [
      "Pregnancy-related discomfort",
      "Postpartum rehabilitation",
      "Pelvic floor dysfunction",
      "Incontinence",
      "Pelvic pain",
      "Men's pelvic health concerns",
    ],

    treatmentApproach: [
      "Discussion and assessment of your symptoms",
      "Education about pelvic health",
      "Pelvic floor rehabilitation where appropriate",
      "Individualised exercise programmes",
      "Movement and activity advice",
      "Progress monitoring throughout rehabilitation",
    ],

    benefits: [
      "Improved pelvic floor function",
      "Better physical confidence",
      "Improved movement and strength",
      "Support during pregnancy and postpartum recovery",
      "Better understanding of pelvic health",
      "Improved ability to manage daily activities",
    ],
  },

  {
    number: "04",
    title: "Orthopaedic & Post-Surgical Rehabilitation",
    slug: "orthopaedic-rehabilitation",

    shortDescription:
      "Structured rehabilitation following surgery, fractures, joint injuries, and orthopaedic procedures.",

    heroDescription:
      "A structured rehabilitation programme designed to help you regain movement, strength, function, and confidence following orthopaedic injury or surgery.",

    overview:
      "Orthopaedic rehabilitation supports recovery following injuries, fractures, joint problems, and surgical procedures. Your rehabilitation programme is progressed according to your condition, stage of healing, physical ability, and medical guidance.",

    whoWeHelp: [
      "People recovering from orthopaedic surgery",
      "People recovering from fractures",
      "People recovering from joint injuries",
      "People following joint replacement",
      "People following ligament reconstruction",
      "People returning to normal activity after surgery",
    ],

    conditions: [
      "Knee replacement",
      "Hip replacement",
      "ACL reconstruction",
      "Fracture rehabilitation",
      "Shoulder repairs",
      "Post-operative rehabilitation",
    ],

    treatmentApproach: [
      "Assessment of movement and physical function",
      "Pain and swelling management",
      "Restoration of joint movement",
      "Progressive strengthening",
      "Functional movement training",
      "Gradual return to everyday activities",
    ],

    benefits: [
      "Improved joint movement",
      "Greater strength and stability",
      "Improved mobility",
      "Increased independence",
      "Greater confidence after surgery",
      "Progressive return to normal activities",
    ],
  },

  {
    number: "05",
    title: "Neurological Rehabilitation",
    slug: "neurological-rehabilitation",

    shortDescription:
      "Individualised rehabilitation designed to improve movement, strength, balance, coordination, and independence.",

    heroDescription:
      "Specialised rehabilitation focused on helping people improve movement, balance, strength, coordination, and independence following neurological conditions.",

    overview:
      "Neurological rehabilitation focuses on movement and functional difficulties associated with conditions affecting the brain, spinal cord, and nervous system. Rehabilitation is tailored to the individual's abilities, challenges, environment, and personal goals.",

    whoWeHelp: [
      "People recovering from stroke",
      "People living with neurological conditions",
      "People with balance or mobility difficulties",
      "People recovering from brain injury",
      "People with nerve-related movement problems",
      "People requiring support with functional mobility",
    ],

    conditions: [
      "Stroke rehabilitation",
      "Brain injury",
      "Spinal cord conditions",
      "Nerve injuries",
      "Balance problems",
      "Mobility difficulties",
    ],

    treatmentApproach: [
      "Assessment of movement and functional ability",
      "Balance and coordination exercises",
      "Strength and mobility training",
      "Walking and movement rehabilitation",
      "Functional activity practice",
      "Progressive rehabilitation based on individual goals",
    ],

    benefits: [
      "Improved mobility",
      "Better balance and coordination",
      "Improved strength",
      "Greater independence",
      "Improved confidence with movement",
      "Better ability to perform everyday activities",
    ],
  },

  {
    number: "06",
    title: "Functional & Specialist Rehabilitation",
    slug: "functional-specialist-rehabilitation",

    shortDescription:
      "Rehabilitation for complex conditions affecting mobility, physical function, independence, and quality of life.",

    heroDescription:
      "Individualised rehabilitation designed to improve physical function, mobility, independence, and confidence in everyday life.",

    overview:
      "Functional and specialist rehabilitation supports people whose physical function or independence has been affected by complex conditions, injury, disability, or significant changes in mobility. Treatment focuses on practical goals and improving participation in everyday activities.",

    whoWeHelp: [
      "People recovering from significant injury",
      "People living with mobility limitations",
      "People requiring functional rehabilitation",
      "People recovering following amputation",
      "People at risk of falls",
      "People managing complex physical rehabilitation needs",
    ],

    conditions: [
      "Amputation rehabilitation",
      "Falls prevention",
      "Mobility training",
      "Post-burn contractures",
      "Club-foot management",
      "Functional rehabilitation",
    ],

    treatmentApproach: [
      "Assessment of functional ability",
      "Mobility and movement training",
      "Strength and conditioning exercises",
      "Balance and falls-prevention work",
      "Practical activity training",
      "Individualised rehabilitation planning",
    ],

    benefits: [
      "Improved mobility",
      "Greater independence",
      "Improved strength and balance",
      "Increased confidence with movement",
      "Better ability to manage everyday tasks",
      "Improved physical function and quality of life",
    ],
  },

  {
    number: "07",
    title: "Mobile Exercise Rehabilitation",
    slug: "mobile-exercise-rehabilitation",

    shortDescription:
      "Tailored one-on-one rehabilitation with a physiotherapist, delivered in a setting that works for you.",

    heroDescription:
      "Guided rehabilitation using evidence-based exercises to get moving, get fitter, and get stronger with your own dedicated physiotherapist.",

    overview:
      "Mobile Exercise Rehabilitation is a personalised supervised rehabilitation program designed around your specific condition, injury, and recovery goals. We deliver tailored gym and hydrotherapy programs that meet you where you need us - at our facility, your preferred gym, your pool, or via telehealth.",

    whoWeHelp: [
      "People recovering from serious injury",
      "People managing debilitating conditions",
      "People requiring guided rehabilitation",
      "People unable to attend a fixed facility",
      "People in rural or remote areas",
      "People wanting supervised exercise support",
    ],

    conditions: [
      "Post-injury rehabilitation",
      "Chronic condition management",
      "Post-surgical recovery",
      "Mobility and strength deficits",
      "Long-term rehabilitation needs",
      "Condition-specific exercise programs",
    ],

    treatmentApproach: [
      "Comprehensive assessment and goal setting",
      "Individualised exercise program design",
      "One-on-one supervised sessions",
      "Tailored gym or hydrotherapy programs",
      "Progressive program adjustments",
      "Telehealth and online exercise options (Physitrack)",
    ],

    benefits: [
      "Personalised attention and motivation",
      "Greater consistency and compliance",
      "Flexible session locations and times",
      "Improved strength and fitness",
      "Faster recovery and progress",
      "Accessibility for rural and remote clients",
    ],
  },
];