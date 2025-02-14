body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #2a0036;
    color: white;
    margin: 0;
    padding: 0;
    background-image: url('hearts-flowers.png');  /* Add hearts and flowers image */
    background-size: cover;
    background-position: center;
    animation: fadeInBackground 3s ease-out;
}

.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    opacity: 0;
    transition: opacity 1s ease;
}

button {
    background-color: #ff1493;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-top: 20px;
    transition: transform 0.2s;
}

button:hover {
    background-color: #ff69b4;
    transform: scale(1.1);
}

input {
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 5px;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #ff1493;
}

.fade-in {
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInBackground {
    0% { background-color: #2a0036; }
    100% { background-color: #3c0041; }
}

