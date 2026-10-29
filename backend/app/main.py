from fastapi import FastAPI

app = FastAPI(
    title="VoiceBridge AI API",
    description="Backend API for the VoiceBridge AI assistive communication platform.",
    version="0.1.0"
)


@app.get("/")
def root():
    return {
        "application": "VoiceBridge AI",
        "message": "Welcome to the VoiceBridge AI backend!",
        "version": "0.1.0"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "VoiceBridge AI Backend"
    }