import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Christella Cheirin Rotikan', prodi: 'Hubungan Internasional' },
  { id: '2', nama: 'Siska Amelia Karo Sekali', prodi: 'Ilmu Hukum' },
  { id: '3', nama: 'Naila Putri Ramadhani', prodi: 'Teknologi Informatika' },
  { id: '4', nama: 'Junivan Gerald Sinaga', prodi: 'Sistem Informasi' },
  { id: '5', nama: 'Jovel Bedeniktus Turangan', prodi: 'Pariwisata' },
];

export default function MahasiswaScreen() {
  const [keyword, setKeyword] = useState('');

  const dataFiltered = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DIREKTORI MAHASISWA</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={dataFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
  },
  nama: { fontSize: 16, fontWeight: '600' },
  prodi: { color: '#666', marginTop: 2 },
  empty: { textAlign: 'center', marginTop: 24, color: '#999', fontSize: 16 },
});