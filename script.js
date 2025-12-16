document.addEventListener('DOMContentLoaded', () => {
    // Navigation Smooth Scroll
    document.querySelectorAll('nav button, nav a').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = button.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            if (targetId) {
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Track Modal Logic
    const tracksData = [
        {
            title: "AI and Digital Transformation in Business",
            topics: [
                "AI applications in strategic decision-making",
                "Automation and process re-engineering",
                "Cloud computing and digital ecosystems",
                "Generative AI and intelligent systems in management",
                "Digital maturity models and transformation roadmaps",
                "Related contemporary issues"
            ]
        },
        {
            title: "Sustainable and Green Business Practices",
            topics: [
                "Circular economy and resource efficiency",
                "ESG frameworks and sustainability reporting",
                "Green supply chains and carbon footprint reduction",
                "AI for environmental monitoring and sustainability analytics",
                "Corporate governance and responsible innovation",
                "Energy readiness for sustainable development",
                "Related contemporary issues"
            ]
        },
        {
            title: "Marketing 5.0 and Digital Consumer Behavior",
            topics: [
                "AI-enabled marketing and consumer insights",
                "Neuromarketing and predictive customer analytics",
                "Social media, influencer, and experiential marketing",
                "Sustainability marketing and green consumer behavior",
                "Omnichannel strategies and digital customer journeys",
                "AI-driven personalization and recommendation systems",
                "E-commerce innovation and consumer trust",
                "Mobile commerce and fintech integration",
                "Digital storytelling and ethical branding",
                "Related contemporary issues"
            ]
        },
        {
            title: "Financial Innovation, FinTech and Digital Economy",
            topics: [
                "Blockchain, cryptocurrency, and digital assets",
                "AI in risk assessment and fraud detection",
                "Green finance, ESG investing, and sustainable banking",
                "Financial inclusion through digital innovation",
                "Regulatory challenges in the FinTech landscape",
                "Related contemporary issues"
            ]
        },
        {
            title: "Smart Operations, Supply Chain and Industry 5.0",
            topics: [
                "IoT-driven logistics and smart manufacturing",
                "Predictive maintenance and operations analytics",
                "Resilience and agility in global supply chains",
                "Robotics, automation, and process optimization",
                "Sustainable operations and energy-efficient production",
                "Related contemporary issues"
            ]
        },
        {
            title: "Human Capital, Leadership and Future of Work",
            topics: [
                "AI in HR analytics and performance management",
                "Leadership styles for digital transformation",
                "Hybrid work models and employee well-being",
                "Skill development for the AI-driven workplace",
                "Organizational culture, agility, and innovation mindset",
                "Future of Work",
                "Related contemporary issues"
            ]
        },
        {
            title: "Entrepreneurship, Innovation and Start-up Ecosystems",
            topics: [
                "Tech-based entrepreneurship and venture incubation",
                "Sustainable business models and impact ventures",
                "AI-enabled innovation and start-up scaling strategies",
                "University–industry partnerships for innovation",
                "Venture capital, funding, and start-up valuation",
                "Related contemporary issues"
            ]
        },
        {
            title: "Governance, Policy and Digital Society",
            topics: [
                "AI policy frameworks and governance mechanisms",
                "E-Governance and public service innovation",
                "Digital inclusion and equity",
                "Cybersecurity, data privacy, and ethical AI regulation",
                "Smart city initiatives and digital public infrastructure",
                "Related contemporary issues"
            ]
        },
        {
            title: "Education, Learning and AI in Pedagogy",
            topics: [
                "AI-enabled personalized and adaptive learning",
                "Digital learning platforms and EdTech integration",
                "Skill-based curriculum for Industry 5.0",
                "Sustainable education and future-readiness",
                "Academic-industry collaboration in management education",
                "Related contemporary issues"
            ]
        },
        {
            title: "Data Analytics, Business Intelligence and Decision Science",
            topics: [
                "Big Data analytics for business strategy",
                "Predictive and prescriptive analytics in decision-making",
                "Visualization tools and dashboard design",
                "AI-based forecasting and optimization models",
                "Data governance and ethical data use",
                "Related contemporary issues"
            ]
        },
        {
            title: "Corporate Social Responsibility and Inclusive Business",
            topics: [
                "CSR for sustainable and inclusive growth",
                "Shared value creation and stakeholder capitalism",
                "Social entrepreneurship and community engagement",
                "Responsible business practices in emerging economies",
                "SDGs and impact assessment models",
                "Public–private partnerships for sustainable development",
                "Related contemporary issues"
            ]
        },
        {
            title: "Technology, Ethics and Responsible AI",
            topics: [
                "Ethical implications of AI deployment",
                "Transparency, accountability, and explainable AI",
                "Bias, fairness, and inclusivity in algorithms",
                "Digital ethics in business and governance",
                "International standards for responsible AI",
                "Related contemporary issues"
            ]
        },
        {
            title: "Global Business Strategy, Trade and Competitiveness",
            topics: [
                "AI and analytics in international business strategy",
                "Digital globalization and supply chain geopolitics",
                "Innovation and competitiveness in emerging markets",
                "Cross-border collaborations and sustainable trade",
                "Global leadership, culture, and strategic foresight",
                "Related contemporary issues"
            ]
        },
        {
            title: "Case Study Track",
            topics: [
                "Research Cases related to the above tracks 1 to 13",
                "Industry Cases related to the above tracks 1 to 13"
            ]
        }
    ];

    const tracksGrid = document.getElementById('tracks-grid');
    const dialogOverlay = document.getElementById('dialog-overlay');
    const dialogTitle = document.getElementById('dialog-title');
    const dialogList = document.getElementById('dialog-list');
    const closeDialogBtn = document.getElementById('close-dialog');

    // Render Tracks
    tracksData.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = "h-full bg-card text-card-foreground shadow-sm rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 group p-6";
        card.innerHTML = `
      <div class="flex flex-col space-y-1.5 p-0 mb-4">
        <h3 class="font-semibold leading-none tracking-tight flex items-start gap-3 text-lg">
          <span class="text-muted-foreground font-mono text-sm mt-1">${(index + 1).toString().padStart(2, '0')}</span>
          <span class="group-hover:text-primary transition-colors">${track.title}</span>
        </h3>
      </div>
      <div class="p-0 text-sm text-muted-foreground">
        Click to view suggested sub-themes and topics.
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary mt-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    `;

        card.addEventListener('click', () => {
            dialogTitle.textContent = `Track ${index + 1}: ${track.title}`;
            dialogList.innerHTML = track.topics.map(topic => `
        <li class="flex gap-3 text-slate-700">
          <div class="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
          <span>${topic}</span>
        </li>
      `).join('');
            dialogOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // Disable scroll
        });

        tracksGrid.appendChild(card);
    });

    // Close Modal
    const closeDialog = () => {
        dialogOverlay.classList.remove('open');
        document.body.style.overflow = ''; // Enable scroll
    };

    closeDialogBtn.addEventListener('click', closeDialog);
    dialogOverlay.addEventListener('click', (e) => {
        if (e.target === dialogOverlay) closeDialog();
    });
});
