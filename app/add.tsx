import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function Add() {

    const [location, setLocation] = React.useState('')
    const [distance, setDistance] = React.useState('')
    const [timeOfDay, setTimeOfDay] = React.useState('')
    const [image, setImage] = React.useState<string | null>(null)
    const [base64Image, setBase64Image] = React.useState<string | null>(null)


    //functon open camera or pick image from library
    const handleTakePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('ขออนุญาตเข้าถึงกล้องเพื่อถ่ายภาพ');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.7,
            base64: true,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setBase64Image(result.assets[0].base64 || null);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>


                <View style={{ flex: 1 }}>
                    <Text style={styles.label}>สถานที่วิ่ง</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ป้อนสถานที่วิ่ง"
                        placeholderTextColor="#999"
                        value={location}
                        onChangeText={setLocation}
                    />

                    <Text style={styles.label}>ระยะทาง (km)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ป้อนระยะทาง"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={distance}
                        onChangeText={setDistance}
                    />

                    <Text style={styles.label}>ช่วงเวลา</Text>
                    <View style={styles.timeContainer}>
                        <TouchableOpacity
                            style={[
                                styles.timeButton,
                                timeOfDay === 'เช้า' && styles.timeButtonActive
                            ]}
                            onPress={() => setTimeOfDay('เช้า')}
                        >
                            <Text
                                style={[
                                    styles.timeText,
                                    timeOfDay === 'เช้า' && styles.timeTextActive
                                ]}
                            >
                                🌅 เช้า
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.timeButton,
                                timeOfDay === 'เย็น' && styles.timeButtonActive
                            ]}
                            onPress={() => setTimeOfDay('เย็น')}
                        >
                            <Text
                                style={[
                                    styles.timeText,
                                    timeOfDay === 'เย็น' && styles.timeTextActive
                                ]}
                            >
                                🌇 เย็น
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>รูปภาพสถานที่</Text>
                    <TouchableOpacity style={styles.takePhotoBtn} activeOpacity={0.8} onPress={handleTakePhoto}>
                        {
                            image
                                ? (<Image source={{ uri: image }} style={{ width: '100%', height: 250 }} />)
                                : (<View style={{ alignItems: 'center' }}>
                                    <Ionicons name="camera-outline" size={40} color="#063197" />
                                    <Text style={{ marginTop: 10, color: '#555' }}>
                                        กดเพื่อถ่ายภาพ
                                    </Text>
                                </View>)
                        }



                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveButton} activeOpacity={0.8}>
                        <Text style={styles.saveText}>บันทึกข้อมูล</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6fb',
    },
    scrollContainer: {
        padding: 20,
    },


    label: {
        fontFamily: 'kanit_700bold',
        marginBottom: 8,
        marginTop: 10,
        color: '#333'
    },
    input: {
        backgroundColor: '#f1f3f6',
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
        fontFamily: 'kanit_400regular',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    timeButton: {
        flex: 1,
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#e0e7ff',
        alignItems: 'center',
        marginHorizontal: 5
    },
    timeButtonActive: {
        backgroundColor: '#063197',
    },
    timeText: {
        color: '#063197',
        fontFamily: 'kanit_700bold'
    },
    timeTextActive: {
        color: '#fff'
    },
    takePhotoBtn: {
        height: 250,
        backgroundColor: '#eef1f7',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        borderWidth: 2,
        borderColor: '#d6dbe6',
        borderStyle: 'dashed'
    },
    saveButton: {
        backgroundColor: '#063197',
        paddingVertical: 15,
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#063197',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6
    },
    saveText: {
        color: '#fff',
        fontFamily: 'kanit_700bold',
        fontSize: 16
    }
})