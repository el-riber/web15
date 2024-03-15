
# Dog Facts API

## Introduction

The Dog Facts API provides a fun and educational way to learn more about dogs through a simple web service. Built with Node.js and Express.js, this API allows users to retrieve random facts about dogs in JSON format.

## Features

- **Retrieve Dog Facts:** Users can request a specific number of dog facts, or if no number is specified, the API will return all available facts.

## Getting Started

### Prerequisites

Before you begin, ensure you have installed the following:
- Node.js (v12.x or later recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/el-riber/web15
   cd DogFactsAPI
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

   By default, the server will start on port 3002. You can access the API at `http://localhost:3002`.

### Usage

#### Retrieve Dog Facts

- **Request:**

  `GET /facts?number={number_of_facts}`

  Replace `{number_of_facts}` with the number of dog facts you wish to retrieve. If no number is specified, the API will return all available facts.

- **Example Request:**

  `GET http://localhost:3002/facts?number=3`

- **Response:**

  ```json
  {
    "facts": [
      "A group of pugs is called a grumble.",
      // more facts here
    ],
    "success": true
  }
  ```

### Contributing

If you're interested in contributing to the Dog Facts API, please read through our contributing guidelines. We welcome all contributions, from bug fixes to feature improvements.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

### Acknowledgments

- Thanks to all contributors who have helped to make this project better.

---

