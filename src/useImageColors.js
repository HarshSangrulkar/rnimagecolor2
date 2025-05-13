// components/OfferCard.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome5, MaterialIcons} from '@expo/vector-icons';

type OfferCardProps = {
  iconName: string,
  iconType?: 'FontAwesome5' | 'MaterialIcons',
  title: string,
  activeOffers: number,
  backgroundColor: string,
};

const OfferCard: React.FC<OfferCardProps> = ({
  iconName,
  iconType = 'FontAwesome5',
  title,
  activeOffers,
  backgroundColor,
}) => {
  const IconComponent =
    iconType === 'MaterialIcons' ? MaterialIcons : FontAwesome5;

  return (
    <View style={[styles.card, {backgroundColor}]}>
      <View style={styles.iconContainer}>
        <IconComponent name={iconName} size={24} color="#fff" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{activeOffers} Active Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginRight: 12,
  },
  iconContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#000',
    fontSize: 12,
  },
});

export default OfferCard;
