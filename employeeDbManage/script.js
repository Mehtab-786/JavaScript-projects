document.addEventListener('DOMContentLoaded', function () {
    let data = [
        {
            name: "Mehtab Ahmed",
            email: "mehtab.ahmed@gmail.com",
            src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Riya Sharma",
            email: "riya.sharma@outlook.com",
            src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Arjun Patel",
            email: "arjun.patel@gmail.com",
            src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Sneha Roy",
            email: "sneha.roy@yahoo.com",
            src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Rohan Desai",
            email: "rohan.desai@protonmail.com",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Aisha Khan",
            email: "aisha.khan@gmail.com",
            src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Karan Verma",
            email: "karan.verma@hotmail.com",
            src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=faces&w=400&h=400&q=80&ixlib=rb-1.2.1",
        },
        {
            name: "Neha Gupta",
            email: "neha.gupta@gmail.com",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Vikram Singh",
            email: "vikram.singh@live.com",
            src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&w=400&h=400&q=80",
        },
        {
            name: "Pooja Nair",
            email: "pooja.nair@gmail.com",
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&w=400&h=400&q=80",
        },
    ];

    let employeeList = document.querySelector('.employeeList');
    const addEmployee = document.querySelector('.addEmployee');
    const form = document.querySelector('form');
    const searchBtn = document.querySelector('.searchBtn');
    const searchInput = document.querySelector('.searchInput');
    

    function addEmployeeToList(data) {
        employeeList.innerHTML = ''
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div')
            div.classList.add('employeeListData')
            div.innerHTML = `
        <h3 data-id=${i} class="employeeListName">${data[i].name}</h3>
        <button class="employeeListDeleteButton">❌</button>
        `;
            employeeList.appendChild(div);
        };
        showEmployeeData(data[0])
    };

    addEmployeeToList(data)

    employeeList.addEventListener('click', (e) => {
        if (e.target.nodeName == 'H3') {
            showEmployeeData(data[e.target.attributes[0].value])
        } else if (e.target.nodeName == 'BUTTON') {
            let id = e.target.attributes[0].value
            data.splice(id, 1)
            addEmployeeToList(data)
        }
    })

    function showEmployeeData(obj) {
        document.querySelector('.employeeData').innerHTML = `
        <img src=${obj.src} alt="Profile Pic"/>
        <h1 class="employeeName">${obj.name}</h1>
        <p class="employeeEmail">${obj.email}</p>
    `
    }

    addEmployee.addEventListener('click', () => {
        document.querySelector('.employee-section').classList.add('hidden')
        document.querySelector('.dialog-box').classList.remove('hidden')

        form.addEventListener('submit', function (e) {
            e.preventDefault()
            const inpName = document.querySelector('#name')
            const inpEmail = document.querySelector('#email')

            let employee = {
                name: inpName.value,
                email: inpEmail.value,
                src: "https://plus.unsplash.com/premium_photo-1766341848075-efbaab0ee598?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            }

            data.push(employee)

            addEmployeeToList(data)
            document.querySelector('.employee-section').classList.remove('hidden')
            document.querySelector('.dialog-box').classList.add('hidden')
        })
    })

    searchBtn.addEventListener('click',function(){
        let inpVal = searchInput.value.trim().toLowerCase();
        if (!inpVal || !inpVal.length > 3) return;
        searchEmployee(inpVal);
        inpVal.textContent = '';
    })

    function searchEmployee(name) {
        let newList = data.filter(employee => employee.name.toLowerCase().startsWith(name) && employee)
        if (newList.length >= 1) {
            addEmployeeToList(newList)
        }else {
            employeeList.innerHTML = 'No Employee Found'
        }
    }

})