import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';
  const warna = isSelesai ? '#16A34A' : '#F97316'; // hijau / oranye
  const warnaSoft = isSelesai ? '#ECFDF3' : '#FFF4E8';
  const ikon = isSelesai ? '✓' : '●';

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: warnaSoft, borderLeftColor: warna },
      ]}
    >
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: warna }]}>
        <Text style={styles.badgeText}>
          {ikon} {status}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: warna }]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderLeftWidth: 6,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 14,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  button: {
    paddingVertical: 11,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 14 },
});