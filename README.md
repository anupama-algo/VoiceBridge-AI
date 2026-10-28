# VoiceBridge AI

### Helping every thought find its voice.

**An Adaptive, AI-Powered Assistive Communication Platform**

> Development Status: In Progress | First Independent AI/ML Project

## Overview

VoiceBridge AI is an AAC-inspired assistive communication prototype designed for people who experience difficulty speaking but can interact with a keyboard, mouse, or touchscreen.

The platform aims to help users compose messages, select commonly used phrases, and convert text into speech. It will also explore personalized machine learning recommendations to make phrase selection more efficient.

Users will always remain in control of what the application communicates.

## Problem Statement

Constructing messages using communication boards can require multiple interactions. VoiceBridge AI investigates whether personalized phrase recommendations can reduce communication effort compared with a simple frequency-based recommendation approach.

## Planned Features

- Accessible communication board with categorized phrases
- Editable message composer
- Browser-based text-to-speech
- Custom vocabulary and favorite phrases
- Local phrase storage and privacy controls
- Frequency-based recommendation baseline
- Personalized machine learning phrase recommendations
- Accessibility and personalization settings
- Offline-friendly essential communication features
- Experimental evaluation dashboard

## Technology Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, JavaScript, CSS |
| Backend | Python, FastAPI, Pydantic |
| Machine Learning | scikit-learn, NumPy, pandas, Matplotlib |
| Local Storage | IndexedDB |
| Testing | pytest, Vitest, React Testing Library |
| Version Control | Git and GitHub |

## Machine Learning Objective

**Research Question:** Can a personalized ML-based phrase recommendation system reduce communication effort compared with a simple frequency-based recommendation system?

The project will compare a transparent non-ML baseline against a trained machine learning model using reproducible evaluation methods.

Any reported performance results will be based on actual experiments, with synthetic-data findings clearly identified.

## Development Roadmap

- [x] Initialize the local Git repository
- [x] Connect the project to GitHub
- [x] Create the initial `.gitignore`
- [ ] Initialize the React frontend
- [ ] Configure the Python backend
- [ ] Build the communication interface
- [ ] Implement text-to-speech and accessibility features
- [ ] Develop the recommendation baseline
- [ ] Train and evaluate the ML model
- [ ] Integrate the frontend and backend
- [ ] Test, document, and deploy the application

## Safety and Privacy

VoiceBridge AI is an educational AAC-inspired prototype, not a medically validated communication device.

The application will prioritize user autonomy, accessibility, and privacy. AI recommendations will never be spoken automatically without explicit user confirmation.

## Author

Developed by [Anupama Sethi](https://github.com/anupama-algo).

## Project Status

Currently in Phase 0: Project Planning and Development Setup.

Documentation and implementation details will be updated throughout development.