from fastapi import APIRouter
from app.api.v1.endpoints import health, auth, credentials, train_routes, train_route_translations, translation, isl_videos

api_router = APIRouter()

api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(
    credentials.router, prefix="/credentials", tags=["credentials"])
api_router.include_router(
    train_routes.router, prefix="/train-routes", tags=["train-routes"])
api_router.include_router(
    train_route_translations.router, prefix="/train-route-translations", tags=["train-route-translations"])
api_router.include_router(
    translation.router, prefix="/translation", tags=["translation"])
api_router.include_router(
    isl_videos.router, prefix="/isl-videos", tags=["isl-videos"])
