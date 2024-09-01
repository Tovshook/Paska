import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      title: "Барилга угсралт",
      description: "Чанартай, бат бөх барилга угсралт.",
      image: "https://www.lifeisnerd.it/wp-content/uploads/2020/08/naruto-shippuden-e-boruto-1200x630-1.jpg",
    },
    {
      id: 2,
      title: "Зураг төсөл",
      description: "Зөвлөгөө өгөх, зураг төсөл боловсруулах.",
      image: "https://www.lifeisnerd.it/wp-content/uploads/2020/08/naruto-shippuden-e-boruto-1200x630-1.jpg",
    },
    {
      id: 3,
      title: "Засвар үйлчилгээ",
      description: "Засвар үйлчилгээний иж бүрэн шийдэл.",
      image: "https://www.lifeisnerd.it/wp-content/uploads/2020/08/naruto-shippuden-e-boruto-1200x630-1.jpg",
    }
  ];

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.header}>Манай Үйлчилгээ</h2>
      
      <div style={styles.serviceList}>
        {services.map(service => (
          <div
            key={service.id}
            style={styles.card}
          >
            <img 
              src={service.image} 
              alt={service.title} 
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      {services.map((service, index) => (
        <div 
          key={service.id}
          style={{
            ...styles.detailCard,
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${service.image}) no-repeat center/cover`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
          }}
        >
          <div style={styles.detailContent}>
            <h3 style={styles.detailTitle}>{service.title}</h3>
            <p style={styles.detailDescription}>{service.description}</p>
          </div>
          <div style={styles.detailImageWrapper}>
            <img 
              src={service.image} 
              alt={service.title} 
              style={styles.detailImage}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#333',
    fontWeight: 'bold',
  },
  serviceList: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px',
  },
  card: {
    textAlign: 'center',
    maxWidth: '300px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    borderRadius: '10px 10px 0 0',
    height: '200px',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '22px',
    margin: '15px 0',
    color: '#333',
  },
  cardDescription: {
    fontSize: '16px',
    lineHeight: '1.5',
    padding: '0 15px 15px',
    color: '#555',
  },
  detailCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '50px',
    padding: '20px',
    borderRadius: '10px',
    color: '#fff',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
  detailContent: {
    zIndex: 2,
    padding: '20px',
    borderRadius: '10px',
    flex: '1',
    textAlign: 'left',
  },
  detailTitle: {
    fontSize: '28px',
    marginBottom: '15px',
  },
  detailDescription: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
  detailImageWrapper: {
    flex: '1',
    height: '100%',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    opacity: 0, // Зургийг нууцлах
  },
};

export default Services;