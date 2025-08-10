# DineDash

DineDash is a comprehensive system designed for managing customers, inventory, and orders. It offers secure authentication, role-based access control, and database integration using MySQL. Built with Spring Boot and Thymeleaf, the application provides a seamless experience for admin and staff members.

Screenshot 2024-10-02 123332

## Features
- Customer Management: Easily add, update, and delete customer information.
- Inventory Management: Keep track of your inventory items, including stock levels and pricing.
- Order Management: Manage customer orders, including order creation, updates, and status tracking.
- User Authentication: Secure login and authentication for admin and staff members.
- Role-Based Access Control: Define roles and permissions for different user types.
- Thymeleaf Templates: Utilizes Thymeleaf for dynamic HTML templates.
- Database Integration: Integrated with MySQL for data storage and retrieval.

## Technology Stack
- Backend: Spring Boot, Java 8, Spring MVC, Spring Data JPA (Hibernate)
- Frontend: Thymeleaf, HTML, CSS, JavaScript
- Database: MySQL
- IDE: Eclipse, Spring Tool Suite (STS)

## Prerequisites
Before running this project, ensure you have the following installed:

- Java 8
- MySQL
- Maven
- Eclipse or Spring Tool Suite (STS)

## Setup and Installation
🎁 Donate

1. Clone the repository:
```bash
git clone https://github.com/your-repository-url/DineDash.git
```

2. Navigate to the project directory:
```bash
cd DineDash
```

3. Configure MySQL Database:
- Create a new MySQL database.
- Update application.properties with your MySQL credentials:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/foodfrenzy
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
```

4. Run the project:
```bash
mvn spring-boot:run
```

5. Access the application:
- Navigate to http://localhost:8080 in your browser.

## Website Screenshot
Here is a preview of the DineDash interface:

Screenshot 2025-05-19 143351
Screenshot 2025-05-19 143427
Screenshot 2025-05-19 143441
Screenshot 2025-05-19 143452
Screenshot 2025-05-19 143504

image

Screenshot 2024-08-24 194958

Screenshot 2024-08-24 220831
Screenshot 2024-08-24 195054
Screenshot 2024-08-24 195106
Screenshot 2024-08-24 195121
Screenshot 2024-10-03 093051
Screenshot 2024-10-03 093106
Screenshot 2024-10-03 093133
Screenshot 2024-10-03 093424
Screenshot 2024-10-03 093437

## Project Structure
```
src/
├── main/
│   ├── java/
│   │   └── com.example.foodfrenzy/
│   │       ├── controller/      # Contains all controllers
│   │       ├── model/           # Contains entity classes
│   │       ├── repository/      # Repository interfaces for database interaction
│   │       └── service/         # Service layer with business logic
│   ├── resources/
│   │   ├── templates/           # Thymeleaf templates for views
│   │   ├── static/              # Static assets (CSS, JavaScript)
│   │   └── application.properties  # Project configuration
│   └── webapp/
│       └── WEB-INF/
│           └── views/           # Additional view files
└── test/
```