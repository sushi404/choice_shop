import React , {useState} from 'react';

export function SelectShop({nearbyShops}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedShop,setSelectedShop] = useState(null);

    const handleButtonClick = () =>{
        if(!nearbyShops){
            console.error("nearbyShops is null");
            return;
        }
        const randomIndex = Math.floor(Math.random() * nearbyShops.length);
        const randomShop = nearbyShops[randomIndex];
        setSelectedShop(randomShop);
        setIsModalOpen(true);
    };

    const handleCloseModal =()=>{
        setIsModalOpen(false);
    };

    return(
        <div>
            <button onClick={handleButtonClick}>お店を選ぶ</button>
            {isModalOpen && (
                <div className="modal">
                    <h2>{selectedShop.displayName.text}</h2>
                    <a href={selectedShop.googleMapsUri} target="_blank" rel="noopener noreferrer">ここに行く</a>
                    <button onClick={handleCloseModal}>閉じる</button>
                </div>
            )}
        </div>
    );
}