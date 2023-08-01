let fullName = prompt("Lütfen Adınızı Giriniz");

        let myName = document.querySelector('#myName');
        myName.innerHTML = `${fullName}`;

        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeek = weekdays[now.getDay()];

            const myClockText = `${hours}:${minutes}:${seconds}`;
            const dateText = `${day}/${month}/${year} (${dayOfWeek})`;
            const myClockElement = document.getElementById('myClock');

            myClockElement.innerHTML = `Saat: ${myClockText}<br>Tarih: ${dateText}`;
        }

        updateClock(); 

        setInterval(updateClock, 1000);