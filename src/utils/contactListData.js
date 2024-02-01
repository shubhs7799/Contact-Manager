const contactListData = [
  {
    "name": "John Smith",
    "designation": "Senior Scientist",
    "company": "InnovateTech",
    "industry": "Technology",
    "email": "john.smith@example.com",
    "phone_number": "1234567890",
    "country": "United States",
    "id": "1"
  },
  {
    "name": "Jane Doe",
    "designation": "Researcher",
    "company": "SciCorp",
    "industry": "Science",
    "email": "jane.doe@example.com",
    "phone_number": "9876543210",
    "country": "United Kingdom",
    "id": "2"
  },
  {
    "name": "David Johnson",
    "designation": "Engineer",
    "company": "Futurion",
    "industry": "Technology",
    "email": "david.johnson@example.com",
    "phone_number": "4567890123",
    "country": "Canada",
    "id": "3"
  },
  {
    "name": "Maria Rodriguez",
    "designation": "Physicist",
    "company": "AstroTech",
    "industry": "Science",
    "email": "maria.rodriguez@example.com",
    "phone_number": "8901234567",
    "country": "Spain",
    "id": "4"
  },
  {
    "name": "Hiroshi Tanaka",
    "designation": "Researcher",
    "company": "GenSci",
    "industry": "Science",
    "email": "hiroshi.tanaka@example.com",
    "phone_number": "5678901234",
    "country": "Japan",
    "id": "5"
  },
  {
    "name": "Sophie Leclerc",
    "designation": "Astronomer",
    "company": "EtoileTech",
    "industry": "Science",
    "email": "sophie.leclerc@example.com",
    "phone_number": "9012345678",
    "country": "France",
    "id": "6"
  },
  {
    "name": "Muhammad Ahmed",
    "designation": "Biologist",
    "company": "BioInnovations",
    "industry": "Science",
    "email": "muhammad.ahmed@example.com",
    "phone_number": "3456789012",
    "country": "Pakistan",
    "id": "7"
  },
  {
    "name": "Elena Petrova",
    "designation": "Chemist",
    "company": "ChemTech",
    "industry": "Science",
    "email": "elena.petrova@example.com",
    "phone_number": "7890123456",
    "country": "Russia",
    "id": "8"
  },
  {
    "name": "Carlos Sanchez",
    "designation": "Computer Scientist",
    "company": "CompTech",
    "industry": "Technology",
    "email": "carlos.sanchez@example.com",
    "phone_number": "2345678901",
    "country": "Mexico",
    "id": "9"
  },
  {
    "name": "Liu Wei",
    "designation": "Engineer",
    "company": "TechMasters",
    "industry": "Technology",
    "email": "liu.wei@example.com",
    "phone_number": "6789012345",
    "country": "China",
    "id": "10"
  },
  {
    "name": "Anna Kowalski",
    "designation": "Researcher",
    "company": "SciTech",
    "industry": "Science",
    "email": "anna.kowalski@example.com",
    "phone_number": "0123456789",
    "country": "Poland",
    "id": "11"
  },
  {
    "name": "Seo Joon-ho",
    "designation": "Physicist",
    "company": "AstroTech",
    "industry": "Science",
    "email": "seo.joonho@example.com",
    "phone_number": "5432109876",
    "country": "South Korea",
    "id": "12"
  },
  {
    "name": "Isabella Rossi",
    "designation": "Biologist",
    "company": "BioInnovations",
    "industry": "Science",
    "email": "isabella.rossi@example.com",
    "phone_number": "8765432109",
    "country": "Italy",
    "id": "13"
  },
  {
    "name": "Mohammed Rahman",
    "designation": "Engineer",
    "company": "TechMasters",
    "industry": "Technology",
    "email": "mohammed.rahman@example.com",
    "phone_number": "2109876543",
    "country": "Bangladesh",
    "id": "14"
  },
  {
    "name": "Anastasia Ivanova",
    "designation": "Chemist",
    "company": "ChemTech",
    "industry": "Science",
    "email": "anastasia.ivanova@example.com",
    "phone_number": "6543210987",
    "country": "Russia",
    "id": "15"
  },
  {
    "name": "Lucas Silva",
    "designation": "Computer Scientist",
    "company": "CompTech",
    "industry": "Technology",
    "email": "lucas.silva@example.com",
    "phone_number": "0987654321",
    "country": "Brazil",
    "id": "16"
  },
  {
    "name": "Chen Wei",
    "designation": "Engineer",
    "company": "TechMasters",
    "industry": "Technology",
    "email": "chen.wei@example.com",
    "phone_number": "4321098765",
    "country": "China",
    "id": "17"
  },
  {
    "name": "Marta Hernandez",
    "designation": "Researcher",
    "company": "SciTech",
    "industry": "Science",
    "email": "marta.hernandez@example.com",
    "phone_number": "8765432109",
    "country": "Spain",
    "id": "18"
  },
  {
    "name": "Yusuf Ahmed",
    "designation": "Physicist",
    "company": "AstroTech",
    "industry": "Science",
    "email": "yusuf.ahmed@example.com",
    "phone_number": "1098765432",
    "country": "Nigeria",
    "id": "19"
  },
  {
    "name": "Svetlana Petrov",
    "designation": "Biologist",
    "company": "BioInnovations",
    "industry": "Science",
    "email": "svetlana.petrov@example.com",
    "phone_number": "3210987654",
    "country": "Russia",
    "id": "20"
  },
  {
    "name": "Ravi Verma",
    "designation": "Engineer",
    "company": "TechMasters",
    "industry": "Technology",
    "email": "ravi.verma@example.com",
    "phone_number": "6543210987",
    "country": "India",
    "id": "21"
  },
  {
    "name": "Sophie Martin",
    "designation": "Chemist",
    "company": "ChemTech",
    "industry": "Science",
    "email": "sophie.martin@example.com",
    "phone_number": "0987654321",
    "country": "France",
    "id": "22"
  },
  {
    "name": "Javier Lopez",
    "designation": "Computer Scientist",
    "company": "CompTech",
    "industry": "Technology",
    "email": "javier.lopez@example.com",
    "phone_number": "4321098765",
    "country": "Spain",
    "id": "23"
  },
  {
    "name": "Jin Woo-Young",
    "designation": "Engineer",
    "company": "TechMasters",
    "industry": "Technology",
    "email": "jin.wooyoung@example.com",
    "phone_number": "7654321098",
    "country": "South Korea",
    "id": "24"
  },
  {
    "name": "Katarzyna Nowak",
    "designation": "Researcher",
    "company": "SciTech",
    "industry": "Science",
    "email": "katarzyna.nowak@example.com",
    "phone_number": "0987654321",
    "country": "Poland",
    "id": "25"
  },
  {
    "name": "Yuki Tanaka",
    "designation": "Physicist",
    "company": "AstroTech",
    "industry": "Science",
    "email": "yuki.tanaka@example.com",
    "phone_number": "4321098765",
    "country": "Japan",
    "id": "26"
  },
  {
    "name": "Giulia Rossi",
    "designation": "Biologist",
    "company": "BioInnovations",
    "industry": "Science",
    "email": "giulia.rossi@example.com",
    "phone_number": "7654321098",
    "country": "Italy",
    "id": "27"
  },
  {
    "name": "Ahmed Rahman",
    "designation": "Engineer",
    "company": "TechMasters",
    "industry": "Technology",
    "email": "ahmed.rahman@example.com",
    "phone_number": "0987654321",
    "country": "Bangladesh",
    "id": "28"
  },
  {
    "name": "Irina Petrova",
    "designation": "Chemist",
    "company": "ChemTech",
    "industry": "Science",
    "email": "irina.petrova@example.com",
    "phone_number": "4321098765",
    "country": "Russia",
    "id": "29"
  },
  {
    "name": "Gabriel Silva",
    "designation": "Computer Scientist",
    "company": "CompTech",
    "industry": "Technology",
    "email": "gabriel.silva@example.com",
    "phone_number": "7654321098",
    "country": "Brazil",
    "id": "30"
  }
]
  
export default contactListData;