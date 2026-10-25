import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import InfoCard from './src/components/InfoCard';
import MahasiswaScreen from './src/screens/MahasiswaScreen';

const DAFTAR_TUGAS = [
  { id: '1', title: 'Laporan Praktikum Mobile', status: 'selesai' },
  { id: '2', title: 'Project UI Aplikasi', status: 'proses' },
  { id: '3', title: 'Presentasi Kelompok', status: 'proses' },
  { id: '4', title: 'Jobsheet 05: FlatList', status: 'selesai' },
  { id: '5', title: 'Revisi Desain Aplikasi', status: 'proses' },
];

export default function App() {
  const [layar, setLayar] = useState('soal1');

  const jumlahSelesai = DAFTAR_TUGAS.filter((t) => t.status === 'selesai').length;
  const jumlahProses = DAFTAR_TUGAS.filter((t) => t.status === 'proses').length;

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroSmall}>Lab. Mobile Computing</Text>
        <Text style={styles.heroTitle}>
          {layar === 'soal1' ? 'Daftar Tugas' : 'Direktori Mahasiswa'}
        </Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, layar === 'soal1' && styles.tabAktif]}
          onPress={() => setLayar('soal1')}
        >
          <Text style={[styles.tabText, layar === 'soal1' && styles.tabTextAktif]}>
            Soal 1: InfoCard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, layar === 'soal2' && styles.tabAktif]}
          onPress={() => setLayar('soal2')}
        >
          <Text style={[styles.tabText, layar === 'soal2' && styles.tabTextAktif]}>
            Soal 2: Mahasiswa
          </Text>
        </TouchableOpacity>
      </View>

      {layar === 'soal1' ? (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.statsRow}>
            <View style={[styles.statBox, { backgroundColor: '#BFEBD1' }]}>
              <Text style={[styles.statAngka, { color: '#1F6B3F' }]}>
                {jumlahSelesai}
              </Text>
              <Text style={[styles.statLabel, { color: '#1F6B3F' }]}>Selesai</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: '#FFD9BD' }]}>
              <Text style={[styles.statAngka, { color: '#9A4A12' }]}>
                {jumlahProses}
              </Text>
              <Text style={[styles.statLabel, { color: '#9A4A12' }]}>Proses</Text>
            </View>
          </View>

          {DAFTAR_TUGAS.map((tugas) => (
            <InfoCard
              key={tugas.id}
              title={tugas.title}
              status={tugas.status}
              onPress={() =>
                Alert.alert('Detail Tugas', `${tugas.title}\nStatus: ${tugas.status}`)
              }
            />
          ))}
        </ScrollView>
      ) : (
        <MahasiswaScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF7FF' },
  hero: {
    backgroundColor: '#D9CCFA',
    paddingTop: 56,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroSmall: { color: '#6B5B95', fontSize: 13, fontWeight: '700' },
  heroTitle: { color: '#3F3556', fontSize: 26, fontWeight: '800', marginTop: 4 },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#EFE7FB',
    borderRadius: 24,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  tabAktif: { backgroundColor: '#fff', elevation: 2 },
  tabText: { fontWeight: '600', color: '#9A8CB8' },
  tabTextAktif: { color: '#5B4A8A' },
  content: { padding: 16, paddingBottom: 32 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  statBox: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },
  statAngka: { fontSize: 28, fontWeight: '800' },
  statLabel: { fontWeight: '700', marginTop: 2 },
});