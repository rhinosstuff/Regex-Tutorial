const emails = [
  'email@example.com',
  'firstname.lastname@example.museum',
  'email@subdomain.example.online',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
  'email@.com',
  '@example.com',
  'example.com',
  'email@example',         
  'email@.example.com',    
  'email@exam_ple.com',    
  'email..email@example.com', 
  'email@example..com',    
  'email@-example.com',    
  'email@example-.com',    
  'email@.com',            
  'email@example.com.',    
]; 
const emailPattern =  
    /^([a-zA-Z0-9._%+-]+)@([a-zA-Z\d.-]+)\.([a-zA-Z]{2,})$/;

emails.forEach(email => {
  let isValid = emailPattern.test(email);
  if (isValid) {
    console.log(`${email} - true`);
  } else {
    console.log(`${email} - false`); 
  }
});