import React, { useState } from 'react';
import { FormContainer, Form, FormGroup, Label, Input, TextArea, Button } from './mailForm.styled';    
import { useTranslation } from 'react-i18next'; 
import { Text, SubTitle } from 'components/shared/Typography';
import { colors } from 'styles/color';
import { ArrowLeft } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  isVisible: boolean;
  onBack: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isVisible, onBack }) => {
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
      console.error('Form submission error:', error);
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
    <FormContainer $isVisible={isVisible}>
      <SubTitle $fontSize="1.5rem" color={colors.primary} $fontWeight='600' $margin="0 4%" $centered>
        {t('contact.formTitle')}
      </SubTitle>
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
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px'
          }}
        >
          <ArrowLeft size={20} color={colors.text.light}/>
          <Text color={colors.text.light} $fontWeight="100">{t('contact.back')}</Text>
        </button>
      </div>
    </FormContainer>
  );
};