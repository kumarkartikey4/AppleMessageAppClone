import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

// Define an interface for the props
interface IconButtonProps {
  iconUrl: string; 
  title: string;  
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ iconUrl, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 5,
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10, 
    marginBottom: 0,
  },
  buttonText: {
    color: '#fff',
  },
});

export default IconButton;
