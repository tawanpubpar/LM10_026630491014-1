import React, { useState } from 'react';
import Footer from './footer';
import Header from './header';

// TypeScript interface for pet data
interface Pet {
    id: number;
    name: string;
    type: string;
    age: number;
    description: string;
    imageUrl: string;
    birthDate: string; // วันเกิด
    gender: 'Male' | 'Female'; // เพศ
}

const petData: Pet[] = [
    {
        id: 1,
        name: 'Furby',
        type: 'Dog',
        age: 3,
        description: 'ชิบะที่เป็นมิตรและมีขี้เล่น.',
        imageUrl: 'https://s.isanook.com/wo/0/ud/4/20927/d21.jpg',
        birthDate: '2021-08-10', // วันเกิด
        gender: 'Male', // เพศ
    },
    {
        id: 2,
        name: 'Fergie',
        type: 'Cat',
        age: 2,
        description: 'ลูกแมวขี้สงสัยและมีบุคลิกขี้เล่น.',
        imageUrl: 'https://thecat2016.wordpress.com/wp-content/uploads/2016/10/pic-1912.jpg',
        birthDate: '2022-03-15', // วันเกิด
        gender: 'Female', // เพศ
    },
    {
        id: 3,
        name: 'Forza',
        type: 'Rabbit',
        age: 1,
        description: 'กระต่ายขนปุยที่ชอบกระโดดไปมา.',
        imageUrl: 'https://s359.kapook.com//pagebuilder/a3146bea-6b28-4b2e-aca5-f1e9e7917b55.jpg',
        birthDate: '2023-01-20', // วันเกิด
        gender: 'Male', // เพศ
    },
];

const MyPetList: React.FC = () => {
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

    const handlePetClick = (pet: Pet) => {
        setSelectedPet(pet);
    };

    return (
        <div>
            <Header />
        <div style={containerStyles}>
            <h1 style={titleStyles}>ข้อมูลสัตว์เลี้ยง</h1>
            <table style={tableStyles}>
                <thead>
                    <tr>
                        <th>รูปภาพ</th>
                        <th>ชื่อสัตว์</th>
                        <th>ประเภท</th>
                        <th>เพศ</th>
                        <th>วันเกิด</th>
                        <th>อายุ</th>
                    </tr>
                </thead>
                <tbody>
                    {petData.map((pet) => (
                        <tr key={pet.id} onClick={() => handlePetClick(pet)} style={rowStyles}>
                            <td style={cellStyles}><img src={pet.imageUrl} alt={pet.name} style={imageStyles} /></td>
                            <td style={cellStyles}>{pet.name}</td>
                            <td style={cellStyles}>{pet.type}</td>
                            <td style={cellStyles}>{pet.gender}</td>
                            <td style={cellStyles}>{pet.birthDate}</td>
                            <td style={cellStyles}>{pet.age} ปี</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedPet && (
                <div style={detailContainerStyles}>
                    <h2>รายละเอียดของ {selectedPet.name}</h2>
                    <img src={selectedPet.imageUrl} alt={selectedPet.name} style={detailImageStyles} />
                    <p><strong>ชื่อ:</strong> {selectedPet.name}</p>
                    <p><strong>ประเภท:</strong> {selectedPet.type}</p>
                    <p><strong>อายุ:</strong> {selectedPet.age} ปี</p>
                    <p><strong>วันเกิด:</strong> {selectedPet.birthDate}</p>
                    <p><strong>เพศ:</strong> {selectedPet.gender}</p>
                    <p><strong>รายละเอียด:</strong> {selectedPet.description}</p>
                </div>
            )}
        </div>
        <Footer/>
        </div>
    );
};

// Styles
const containerStyles: React.CSSProperties = {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "900px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const titleStyles: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#2c3e50",
};

const tableStyles: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
};

const rowStyles: React.CSSProperties = {
    cursor: "pointer",
    '&:hover': {
        backgroundColor: "#e9ecef",
    },
};

const cellStyles: React.CSSProperties = {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
};

const imageStyles: React.CSSProperties = {
    width: "100px",
    height: "auto",
    borderRadius: "4px",
    display: "block",
    margin: "0 auto", // จัดรูปภาพให้ตรงกลาง
};

const detailContainerStyles: React.CSSProperties = {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center", // เพิ่มการจัดข้อความให้ตรงกลาง
};

const detailImageStyles: React.CSSProperties = {
    width: "200px",
    height: "auto",
    borderRadius: "4px",
    display: "block",
    margin: "0 auto", // จัดรูปภาพให้ตรงกลาง
};

export default MyPetList;
