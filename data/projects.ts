export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  category: string;
  visual: "documents" | "environment" | "vision" | "identity" | "health" | "fossils";
  image: string;
  imageAlt: string;
  technologies: string[];
  problem: string;
  approach: string[];
  outcomes: string[];
  github?: string;
  sourceNote: string;
  authorship?: string;
  metrics?: { value: string; label: string; note?: string }[];
  gallery?: { src: string; alt: string; caption: string }[];
  privacyNote?: string;
};

export const projects: Project[] = [
  {
    slug: "docmind-ai",
    title: "DocMindAI",
    eyebrow: "Generative AI",
    summary: "A local-first document intelligence application for asking grounded questions about uploaded PDFs.",
    description: "DocMindAI turns PDF documents into a searchable knowledge base. It retrieves relevant passages through semantic search and supplies that context to a local language model so answers remain connected to the source document.",
    category: "AI & Document Intelligence",
    visual: "documents",
    image: "/project-docmind-ai.png",
    imageAlt: "Document intelligence workspace with a laptop analyzing research files",
    technologies: ["Python", "Streamlit", "LangChain", "ChromaDB", "Hugging Face", "Ollama", "Llama 3.1"],
    problem: "Long documents are difficult to search when readers need a precise answer, its supporting context, and the page where that information appeared.",
    approach: [
      "Load uploaded PDF documents and split their text into searchable chunks.",
      "Create sentence-transformer embeddings and store them in ChromaDB.",
      "Retrieve semantically relevant passages for each natural-language question.",
      "Generate a grounded response with a locally running Llama 3.1 model through Ollama.",
      "Return source-document and page references alongside retrieved information.",
    ],
    outcomes: [
      "Demonstrates a complete retrieval-augmented generation pipeline.",
      "Keeps language-model execution local rather than depending on a hosted model API.",
      "Provides a modular Python architecture for loading, chunking, indexing, retrieval, and question answering.",
    ],
    github: "https://github.com/raycite/DocMindAI",
    sourceNote: "Based on the public DocMindAI repository and README.",
  },
  {
    slug: "cnn-school-face-recognition",
    title: "CNN School Face Recognition System",
    eyebrow: "Undergraduate Research",
    summary: "A team-built computer-vision system for recognizing uniformly dressed pupils in school surveillance footage.",
    description: "Developed by a three-person undergraduate research team, this project explored how a convolutional neural network could support student safety and incident investigation at KNUST Basic School. The pipeline turns CCTV footage into labeled face data, trains a multiclass CNN, and applies the model to video frames for identity prediction.",
    category: "Computer Vision & School Safety",
    visual: "identity",
    image: "/project-cnn-school-face-recognition.png",
    imageAlt: "Three university researchers reviewing an anonymized computer-vision surveillance system",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "NumPy", "Scikit-learn", "CCTV Video Processing"],
    problem: "Uniform school clothing makes visual identification from surveillance footage difficult, limiting how quickly schools can investigate bullying, vandalism, unauthorized access, and other safety incidents.",
    approach: [
      "Process approximately 20 GB of CCTV footage and extract face images for individual pupil classes.",
      "Resize faces to 112 × 92 pixels, convert them to grayscale, normalize the values, and augment the training data.",
      "Train a four-block convolution and max-pooling network with a 128-unit dense layer, dropout, and a 26-class softmax output.",
      "Evaluate predictions with accuracy and loss curves, a confusion matrix, and classification metrics.",
      "Deploy the saved Keras model with OpenCV to detect faces, predict identities, and annotate video frame by frame.",
    ],
    outcomes: [
      "The thesis reports 95.45% validation accuracy and successful recognition when pupils were sufficiently close to the camera.",
      "Testing identified camera distance and placement as important practical limits on recognition quality.",
      "The work demonstrates an end-to-end research pipeline from CCTV data preparation through model training and video deployment.",
      "The prototype provides a foundation for safer, carefully governed real-time monitoring in educational environments.",
    ],
    github: "https://github.com/raycite/Final-Year-Project---CNN-Facial-recognition/tree/main",
    sourceNote: "Based on the supplied thesis abstract, technical figures, and public training and deployment notebooks. The 95.45% result is reported in the thesis abstract.",
    authorship: "Final-year undergraduate research completed by a team of three.",
    metrics: [
      { value: "95.45%", label: "Reported validation accuracy", note: "Thesis abstract" },
      { value: "~20 GB", label: "CCTV footage processed", note: "Thesis abstract" },
      { value: "26", label: "Identity classes", note: "Model architecture" },
      { value: "882,842", label: "Model parameters", note: "Keras model summary" },
    ],
    gallery: [
      { src: "/project-cnn-training-curves.png", alt: "CNN training and validation accuracy and loss curves", caption: "Training history used to compare learning and validation behaviour across epochs." },
      { src: "/project-cnn-confusion-matrix.png", alt: "Confusion matrix for the pupil identity classes", caption: "Confusion matrix showing class-level predictions during model evaluation." },
      { src: "/project-cnn-model-summary.png", alt: "Keras summary of the convolutional neural network", caption: "The implemented CNN contains four convolution blocks and 882,842 trainable parameters." },
      { src: "/project-cnn-architecture.png", alt: "Diagram explaining convolutional feature learning and classification", caption: "Conceptual CNN pipeline from input images through feature learning to classification." },
    ],
    privacyNote: "This public case study intentionally excludes identifiable pupil photographs and surveillance frames. Only technical figures and privacy-safe imagery are shown.",
  },
  {
    slug: "wetland-heavy-metal-assessment",
    title: "Wetland Heavy-Metal Risk Assessment",
    eyebrow: "Environmental Research",
    summary: "A multi-media assessment of heavy-metal contamination and associated risks in two inland wetlands in Northern Ghana.",
    description: "This research examines agricultural practices and heavy-metal residues across soil, water, vegetables, and fish from the Libga and Bunglung wetland areas, connecting laboratory measurements with ecological and human-health risk assessment.",
    category: "Environmental Data & Public Health",
    visual: "environment",
    image: "/project-wetland-research.png",
    imageAlt: "Environmental researcher collecting a water sample beside an inland wetland",
    technologies: ["Scientific Data Analysis", "Risk Assessment", "Data Visualization", "Excel", "Environmental Monitoring"],
    problem: "Agricultural activity around inland wetlands can introduce contaminants into water, soil, crops, and aquatic food systems, but the immediate and long-term risks differ across these exposure pathways.",
    approach: [
      "Organize laboratory concentration data covering multiple metals and sample media.",
      "Compare concentration patterns across soil and water and examine spatial variability.",
      "Benchmark observed concentrations against cited WHO/FAO limits.",
      "Calculate hazard quotients and ecological risk factors for priority metals.",
      "Assess uptake and bioaccumulation patterns in vegetables and fish samples.",
    ],
    outcomes: [
      "The report identifies water as the most urgent exposure pathway relative to soil.",
      "It reports particularly high ecological and human-health concern associated with arsenic and cadmium in water.",
      "The analysis recommends improved agrochemical management, wetland buffer zones, water protection, and continued monitoring.",
    ],
    sourceNote: "Based on the supplied research dataset and Chapter 4 analysis document.",
  },
  {
    slug: "computer-vision-agriculture-workshop",
    title: "Computer Vision for Agriculture Demo",
    eyebrow: "AI Education",
    summary: "A GDIW 2025 workshop notebook connecting computer-vision fundamentals with face recognition and crop-disease use cases.",
    description: "Created to facilitate a practical workshop, this notebook introduces AI, machine learning, deep learning, convolution, and image representation before moving into hands-on CNN work and an agriculture-focused tomato-leaf demonstration.",
    category: "Computer Vision & Facilitation",
    visual: "vision",
    image: "/project-cv-agriculture.png",
    imageAlt: "Computer vision workshop using tomato leaves and a machine-learning display",
    technologies: ["Python", "TensorFlow", "Keras", "MobileNetV2", "CNN", "Google Colab", "Pillow"],
    problem: "Learners often encounter computer vision as abstract theory without a clear bridge from image pixels and convolution to real applications in agriculture and other sectors.",
    approach: [
      "Teach the relationship between AI, machine learning, deep learning, and computer vision.",
      "Demonstrate how images are represented numerically and processed through convolution.",
      "Train and evaluate a CNN using the Olivetti Faces dataset.",
      "Use MobileNetV2 to demonstrate feature extraction from uploaded tomato-leaf images.",
      "Discuss how a crop-specific dataset such as PlantVillage would be needed to train a production disease classifier.",
    ],
    outcomes: [
      "Delivered a reusable Google Colab learning resource for the GDIW 2025 workshop.",
      "Connected model generalization and confidence to practical prediction behavior.",
      "Presented agriculture and healthcare as applied computer-vision pathways.",
    ],
    github: "https://github.com/raycite/GDIW-2025---Computer-Vision-Facilitation",
    sourceNote: "Based on the public GDIW workshop repository and notebook.",
  },
  {
    slug: "life-expectancy-analysis",
    title: "Life Expectancy Analysis",
    eyebrow: "Population Health",
    summary: "An exploratory analysis of socioeconomic, health, and environmental factors associated with life expectancy across countries.",
    description: "This project uses country-level data to explore relationships between life expectancy and factors including GDP, education, immunization, mortality, health expenditure, clean water access, and environmental conditions.",
    category: "Data Analysis & Public Health",
    visual: "health",
    image: "/project-life-expectancy.png",
    imageAlt: "Data analyst reviewing global population-health visualizations",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    problem: "Life expectancy reflects interconnected economic, healthcare, education, and environmental conditions, making it useful to explore which factors move together with population-health outcomes.",
    approach: [
      "Clean and preprocess country-level life-expectancy data.",
      "Perform exploratory data analysis and statistical investigation.",
      "Visualize relationships between life expectancy and socioeconomic or health indicators.",
      "Explore predictive modeling and interpret the observed patterns.",
    ],
    outcomes: [
      "The project reports positive associations between life expectancy, GDP, and education.",
      "It highlights healthcare access and health expenditure as relevant population-health factors.",
      "It demonstrates an end-to-end analytical workflow from cleaning through interpretation and reporting.",
    ],
    github: "https://github.com/raycite/Life-Expectancy-Analysis",
    sourceNote: "Based on the public Life Expectancy Analysis repository and notebook.",
  },
  {
    slug: "dinosaur-data-analysis",
    title: "Dinosaur Fossil Data Analysis",
    eyebrow: "Exploratory Data Analysis",
    summary: "An exploration of dinosaur fossil records covering size, diet, age, geography, and discovery clusters.",
    description: "This project cleans and explores dinosaur fossil data to compare physical characteristics and diets, examine how dinosaur length varies over time, and map the geographic distribution of fossil discoveries.",
    category: "Data Analysis & Paleontology",
    visual: "fossils",
    image: "/project-dinosaur-analysis.png",
    imageAlt: "Dinosaur fossils beside a laptop displaying a fossil-distribution analysis",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "DBSCAN", "Jupyter Notebook"],
    problem: "Fossil records contain information about dinosaur characteristics, time periods, and discovery locations, but those patterns are difficult to understand without cleaning, visualization, and geographic analysis.",
    approach: [
      "Clean and explore the supplied dinosaur fossil records.",
      "Compare dinosaur types, diets, ages, and recorded lengths.",
      "Examine whether dinosaur length shows a consistent pattern over time.",
      "Visualize the geographic distribution of fossil discoveries.",
      "Use DBSCAN clustering to identify areas with high concentrations of fossil records.",
    ],
    outcomes: [
      "Sauropods were the largest dinosaur type represented in the dataset.",
      "Herbivorous dinosaurs had the highest average recorded length.",
      "Fossil records were concentrated in regions including North America and Europe.",
      "The analysis found no strong evidence that dinosaurs consistently became larger over time.",
    ],
    github: "https://github.com/raycite/Data_Analysis_Dinosaurs",
    sourceNote: "Based on the public Dinosaur Data Analysis repository and README.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
