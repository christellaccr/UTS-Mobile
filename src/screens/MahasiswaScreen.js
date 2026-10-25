import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Christella Cheirin Rotikan', prodi: 'Hubungan Internasional' },
  { id: '2', nama: 'Siska Amelia Karo Sekali', prodi: 'Ilmu Hukum' },
  { id: '3', nama: 'Naila Putri Ramadhani', prodi: 'Teknologi Informatika' },
  { id: '4', nama: 'Junivan Gerald Sinaga', prodi: 'Sistem Informasi' },
  { id: '5', nama: 'Jovel Bedeniktus Turangan', prodi: 'Pariwisata' },
];



// warna avatar (pastel) dan warna teks prodi (lebih gelap agar terbaca)
const WARNA_PRODI = {
  'Sistem Informasi': { bg: '#BBD7FB', teks: '#2F5E9E' },
  'Teknologi Informasi': { bg: '#DCC9F7', teks: '#6A43A8' },
  'Teknik Informatika': { bg: '#BDEBDD', teks: '#23725C' },
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
        placeholderTextColor="#B3A8CC"
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
          const warna = WARNA_PRODI[item.prodi] || { bg: '#E5E7EB', teks: '#4B5563' };
          return (
            <View style={styles.item}>
              <View style={[styles.avatar, { backgroundColor: warna.bg }]}>
                <Text style={[styles.avatarText, { color: warna.teks }]}>
                  {item.nama.charAt(0)}
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.nama}>{item.nama}</Text>
                <Text style={[styles.prodi, { color: warna.teks }]}>{item.prodi}</Text>
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
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#3F3556',
    borderWidth: 1,
    borderColor: '#E7DEF8',
  },
  count: { color: '#9A8CB8', marginTop: 10, marginBottom: 12, fontSize: 13 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#7C6BA8',
    shadowOpacity: 0.1,
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
  avatarText: { fontSize: 18, fontWeight: '800' },
  info: { flex: 1 },
  nama: { fontSize: 16, fontWeight: '700', color: '#3F3556' },
  prodi: { marginTop: 2, fontWeight: '600', fontSize: 13 },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    color: '#B3A8CC',
    fontSize: 16,
    fontWeight: '600',
  },
});