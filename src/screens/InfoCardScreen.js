import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import InfoCard from '../components/InfoCard';

export default function InfoCardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Tugas</Text>

      <InfoCard
        title="Laporan Praktikum Mobile"
        status="selesai"
        onPress={() => Alert.alert('Detail', 'Laporan Praktikum Mobile: selesai')}
      />
      <InfoCard
        title="Project UI Aplikasi"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Project UI Aplikasi: sedang diproses')}
      />
      <InfoCard
        title="Presentasi Kelompok"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Presentasi Kelompok: sedang diproses')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
});