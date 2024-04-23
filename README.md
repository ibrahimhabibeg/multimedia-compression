# Multimedia Course Compression Project

This project explores different compression techniques and implements a user interface for applying them through a React website.

## Live Website Link:
https://multimedia-compression.onrender.com/

## Project Goal:

Implement loseless compression algorithms

## Running the Project:

Option 1: Using Docker

- Build the Docker image from the base file in the website folder following the instructions provided there.  
`
docker build -t multimedia .
`

- Run the container and map the container port (80) to your host machine's port (usually 3000).  
`
docker run --name multimedia -p 3000:80 -d --rm multimedia
`

Option 2: Using Node.js (without Docker)

- Install Node and npm from https://nodejs.org/en/download
- Install pnpm  
`
npm i -g pnpm
`
- Navigate to the website folder in your terminal.
- Install dependencies:  
`
pnpm install
`
- Start the development server:  
`
pnpm run dev
`
- This will start the website at http://localhost:5173/ (or a different port if specified) for live development.
- Build the website for production:  
`
pnpm run build
`  
This will create an optimized production build in the website/dist folder.


## Acknowledgments

I would like to thank Dr. Osama Farouk for his guidance and support throughout this project. His lectures and feedback were invaluable in helping me understand the concepts and complete this project successfully.