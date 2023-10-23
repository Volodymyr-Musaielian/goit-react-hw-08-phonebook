import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 'calc(1em / 10)',
    color: '#058484',

    // color: #14fcfc;
    textShadow: '0px 4px 6px rgb(249, 249, 6)',
    marginBottom: '20px',
  },
};

const HomePage = () => {
  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to PHONEBOOK{' '}
          <span role="img" aria-label="Иконка приветствия">
            💁‍♀️
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
