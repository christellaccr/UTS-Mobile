import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Christella Cheirin Rotikan', prodi: 'Hubungan Internasional' },
  { id: '2', nama: 'Siska Amelia Karo Sekali', prodi: 'Ilmu Hukum' },
  { id: '3', nama: 'Naila Putri Ramadhani', prodi: 'Teknologi Informatika' },
  { id: '4', nama: 'Junivan Gerald Sinaga', prodi: 'Sistem Informasi' },
  { id: '5', nama: 'Jovel Bedeniktus Turangan', prodi: 'Pariwisata' },
];


const WARNA_PRODI = {
  'Sistem Informasi': '#2563EB',
  'Teknologi Informasi': '#7C3AED',
  'Teknik Informatika': '#0D9488',
};

export default function MahasiswaScreen() {
  const [keyword, setKeyword] = useState('');

  const dataFiltered = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="🔍  Cari nama mahasiswa..."
        placeholderTextColor="#94A3B8"
        value={keyword}
        onChangeText={setKeyword}
      />

      <Text style={styles.count}>
        Menampilkan {dataFiltered.length} dari {DAFTAR_MAHASISWA.length} mahasiswa
      </Text>

      <FlatList
        data={dataFiltered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 32 }}
        renderItem={({ item }) => {
          const warna = WARNA_PRODI[item.prodi] || '#475569';
          return (
            <View style={styles.item}>
              <View style={[styles.avatar, { backgroundColor: warna }]}>
                <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.nama}>{item.nama}</Text>
                <Text style={[styles.prodi, { color: warna }]}>{item.prodi}</Text>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  count: { color: '#64748B', marginTop: 10, marginBottom: 12, fontSize: 13 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarText: { color: '#fff', fontSize: 18, fontWeight: '800' },
  info: { flex: 1 },
  nama: { fontSize: 16, fontWeight: '700', color: '#1F2937' },
  prodi: { marginTop: 2, fontWeight: '600', fontSize: 13 },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '600',
  },
});