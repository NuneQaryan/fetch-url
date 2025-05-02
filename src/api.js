import axios from "axios";
import "../src/components/Table/CustomTable.css";

const api = axios.create({
  adapter: async (config) => {
    await new Promise((res) => setTimeout(res, 500));

    return {
      data: {
        headers: [
          "Name",
          "Email",
          "Age",
          "Role",
          "Skills",
          "Projects"
        ],
        rows: [
          ["John", "johnWolter@gmail.com", 21, "Frontend Developer", ["HTML", "CSS", "JavaScript"], ["Portfolio Site", "Landing Page"]],
          ["Lily", "lily.james@example.com", 24, "Backend Developer", ["Node.js", "Express"], ["API Service"]],
          ["Mark", "mark.stone@example.com", 27, "Full Stack Developer", ["React", "Node.js", "Docker"], ["E-commerce Platform", "Admin Dashboard"]],
          ["Anna", "anna.karenina@example.com", 22, "UI/UX Designer", ["Figma", "Adobe XD"], ["Mobile App Design"]],
          ["Robert", "robert.fischer@example.com", 30, "DevOps Engineer", ["AWS", "Docker", "Terraform"], ["CI/CD Pipeline", "Cloud Migration"]],
          ["Sara", "sara.lane@example.com", 26, "QA Engineer", ["Selenium", "Jest", "Cypress"], ["Automated Tests"]],
          ["David", "david.miller@example.com", 28, "Mobile Developer", ["Flutter", "Dart"], ["Weather App"]],
          ["Mia", "mia.white@example.com", 23, "Data Analyst", ["Python", "Pandas", "SQL"], ["Data Dashboard"]],
          ["Leo", "leo.king@example.com", 25, "Machine Learning Engineer", ["TensorFlow", "scikit-learn"], ["ML Model Trainer"]],
          ["Nora", "nora.hale@example.com", 29, "Product Manager", [], ["Project Coordination"]]
        ]
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    };
  },
});


export const fetchTableData = async (url) => {
  try {
    const response = await api.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};