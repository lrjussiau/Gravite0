// ContactForm.tsx
import React, { useState } from 'react';
import { FormContainer,
            Form,
            FormGroup,
            Label,
            Input,
            TextArea,
            Button } from './mailForm.styled';    
import { useTranslation } from 'react-i18next'; 
import { Text, SubTitle } from 'components/shared/Typography';
import { colors } from 'styles/color';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('YOUR_API_ENDPOINT/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <FormContainer>
      <SubTitle $fontSize="1.5rem" color={colors.primary} $fontWeight='600' $margin="0 4%" $centered>Envoie nous un message</SubTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name"><Text $fontWeight='200'>{t('contact.name')}</Text></Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email"><Text $fontWeight='200'>{t('contact.email')}</Text></Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message"><Text $fontWeight='200'>{t('contact.message')}</Text></Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t('contact.send...') : t('contact.send')}
        </Button>

        {status === 'success' && <Text color='green' $fontSize={{desktop:"0.8rem"}}>{t('contact.sent')}</Text>}
        {status === 'error' && <Text color='red' $fontSize={{desktop:"0.8rem"}}>{t('contact.error')}</Text>}
      </Form>
    </FormContainer>
  );
};

export default ContactForm;