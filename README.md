# Data Scientist

Welcome to my professional page! I'm Edgar, a passionate and experienced data scientist specializing in user behaviour analysis. With a background in computer science, I have extensive experience turning data into insights, driving business strategies, and solving complex problems with data.

- **Programming Languages**: Python, R, SQL
- **Libraries & Tools**: PySpark, scikit-learn, SciPy, Databricks, AWS, Jupyter Notebook, Looker, Excel, Jira, Confluence, Microsoft SQL Server, Git
- **Skills**: Statistics, Machine Learning, Algorithms, Data Structures, A/B Testing and Interleaving, Data Analytics, Research, Project Management, Public Speaking

---

## Education
- MS in Data Science - **IU International University of Applied Sciences** (2023 - 2024, Germany)

- BS in Computer Science - **American University of Armenia** (2017 - 2021, Armenia)

## Work Experience

**Data Scientist @ Picsart | User Behaviour (_Jan 2022 - Present_)**
- Delivered to production a crash anomaly detection model for the engineering
department to monitor and track the anomalous crash activity of users' mobile
devices.
- Researched and adapted alternative hypothesis testing approaches (implemented Sequential Testing for Interleaving).
Accelerate the company's data-driven decision-making processes by up to 5 times.
- A/B testing and Interleaving, hypothesis testing. Communicated findings to both technical and non-technical
stakeholders, effectively translating complex analyses into actionable business insights.
- Conducted training for the AI department on leveraging the company's data and
promoted one of the main Data Flywheel initiatives among ML Scientists.
- Handled large datasets using PySpark and SQL via Databricks and AWS S3, applied
advanced statistical techniques to real-time decision systems, and performed visual
dataset analyses leveraging clustering ML algorithms and NN.
- Engaged in research-oriented tasks to inform product and operational decisions.

Picsart is one of the world’s largest digital creation platforms with 150M+ active monthly users, a top 20 most downloaded app worldwide for 2021, and available in over 30 languages. The platform at Picsart provides creators with advanced, intuitive AI tools, exclusive content, and a massive open-source content collection to propel their creativity.

**Researcher @ FAST ADVANCE Research Grant Program | Explainable AI (_Mar 2023 - Present_)**
- Actively participating in a research project focused on developing interpretable,
robust machine learning models using Dempster-Shafer theory.
- Designing, implementing, and applying proposed explainable models in real-world datasets across
various sectors, and participating in preparing scientific articles for high-impact conferences and journals.

**Teaching Associate @ American University of Armenia | DS120 Programming for Data Science (_Jan 2022 - Jun 2022_)**
- Conducted problem-solving sessions.
- Graded homework.
- This role enhanced my ability to communicate complex ideas simply.

**Database Developer @ Synergy International Systems | Judiciary Systems (_Sep 2019 - Dec 2021_)**
- Worked on the database level of various judicial management systems of different
quickly evolving countries using.
- Built and supported analytical tools allowing quick ad-hoc queries.
- Developed jobs, triggers, and stored procedures for SQL servers using Transact-SQL and PostgreSQL.
- Actively participated in conducting technical training for the ministry employees of
the client countries.

Synergy International Systems is a global software company that empowers organizations to become more data-driven in achieving their impact, improving information management, decision-making, service delivery, and organizational effectiveness. It is a privately held company headquartered in the Washington, D.C. metro area, with a Development and Global Learning Center in Yerevan, Armenia.

---

## Projects

# Introduction to Sequential Testing Tools for Interleaving Experiments

In the dynamic realm of machine learning and ranking algorithms, traditional A/B testing, while effective for causal inference, poses significant challenges due to its lengthy duration and resource requirements.
To address this, I have implemented a suite of sequential testing tools for interleaving experiments in Python. Interleaving is adept at evaluating ranked lists, allowing for the rapid comparison of different ranking algorithms by intermixing their results and measuring user engagement directly. Below I provide a brief overview of interleaving experiments.

## How Interleaving Works:

Unlike A/B testing, which divides consumers into separate groups, interleaving combines lists from control and treatment rankers, presenting them in an interwoven format. This method not only mitigates the issues of position bias but also leverages the entire sample for a single, more stable distribution, thereby reducing variance and increasing the speed of experimentation.
The process involves rounds where the highest-ranked items not already present in the interleaved list are selected from both control and treatment rankers. The preference signal—derived from which ranker's items are more engaged with—serves as the indicator of superiority between the two rankers, bypassing the need for conventional control and treatment group comparisons.

## Why Interleaving Succeeds:

The strength of interleaving lies in its streamlined approach, utilizing one-sample tests over two-sample tests, hence reducing variability and required sample size. This technique not only consolidates the sample to estimate a single distribution but also amplifies sensitivity to treatment effects by extracting additional signals from consumer preferences under forced choice conditions.


---

## Publications
[Poghosyan A](https://scholar.google.cl/citations?user=A0He6ugAAAAJ&hl=en),
[Harutyunyan A](https://scholar.google.cl/citations?hl=en&user=G8fSsPYAAAAJ),
**Davtyan E**, Petrosyan K, [Baloian N](https://scholar.google.cl/citations?hl=en&user=LYlzMIIAAAAJ).
A Study on Automated Problem Troubleshooting in Cloud Environments with Rule Induction and
Verification. Applied Sciences. 2024; 14(3):1047. [https://doi.org/10.3390/app14031047](https://doi.org/10.3390/app14031047)
