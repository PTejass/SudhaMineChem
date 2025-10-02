export const formatWhatsAppMessage = (data: {
  name: string;
  company: string;
  phone: string;
  email: string;
  productInterest: string;
  message: string;
}) => {
  return `Hello! I'm interested in your products.

Name: ${data.name}
Company: ${data.company}
Phone: ${data.phone}
Email: ${data.email}
Product Interest: ${data.productInterest}
Message: ${data.message}

Please provide more details and pricing information.`;
};

export const openWhatsApp = (phoneNumber: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const getQuoteWhatsAppMessage = (productName: string) => {
  return `Hello! I'm interested in getting a quote for ${productName}. Please provide pricing and specifications.`;
};
