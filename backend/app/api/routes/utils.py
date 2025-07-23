from fastapi import APIRouter, Depends, status
from pydantic import BaseModel, EmailStr

from app.api.deps import get_current_active_superuser
from app.models import Message
from app.utils import generate_test_email, send_email, generate_contact_email

router = APIRouter(prefix="/utils", tags=["utils"])


@router.post(
    "/test-email/",
    dependencies=[Depends(get_current_active_superuser)],
    status_code=201,
)
def test_email(email_to: EmailStr) -> Message:
    """
    Test emails.
    """
    email_data = generate_test_email(email_to=email_to)
    send_email(
        email_to=email_to,
        subject=email_data.subject,
        html_content=email_data.html_content,
    )
    return Message(message="Test email sent")


@router.post(
    "/contact-webhook/",
    status_code=status.HTTP_201_CREATED,
    response_model=Message,
)
def contact_webhook(form: ContactForm) -> Message:
    email_data = generate_contact_email(
        first_name=form.first_name,
        last_name=form.last_name,
        email=form.email,
        phone=form.phone,
        subject=form.subject,
        message=form.message,
    )
    send_email(
        email_to="director@fultondevelopment.org",
        subject=email_data.subject,
        html_content=email_data.html_content,
    )
    return Message(message="Contact form submitted successfully.")


@router.get("/health-check/")
async def health_check() -> bool:
    return True
