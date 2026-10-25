import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';

  // hijau mint untuk 'selesai', oranye peach untuk 'proses'
  const warna = isSelesai ? '#86D9A8' : '#FDBA8C';
  const warnaSoft = isSelesai ? '#EAF9F0' : '#FFF3E9';
  const warnaTeks = isSelesai ? '#1F6B3F' : '#9A4A12';
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
        <Text style={[styles.badgeText, { color: warnaTeks }]}>
          {ikon} {status}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: warna }]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, { color: warnaTeks }]}>
          Lihat Detail
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderLeftWidth: 8,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#7C6BA8',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#3F3556',
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
    fontWeight: '800',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  button: {
    paddingVertical: 11,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: { fontWeight: '800', fontSize: 14 },
});