// Route data
const routes = {
    'Quibdó': {
        'Beté': { time: 3.0, cost: 22000, distance: 85 },
        'Puné': { time: 4.5, cost: 30000, distance: 120 },
        'Boca de Bebará': { time: 5.5, cost: 38000, distance: 155 },
        'Tangui': { time: 2.8, cost: 20000, distance: 75 },
        'Bellavista': { time: 4.0, cost: 28000, distance: 105 },
    },
    'Beté': {
        'Quibdó': { time: 3.0, cost: 22000, distance: 85 },
        'Puné': { time: 2.5, cost: 18000, distance: 65 },
        'Boca de Bebará': { time: 4.0, cost: 28000, distance: 110 },
        'Tangui': { time: 3.5, cost: 22000, distance: 95 },
        'Bellavista': { time: 1.8, cost: 14000, distance: 48 },
    },
    'Puné': {
        'Quibdó': { time: 4.5, cost: 30000, distance: 120 },
        'Beté': { time: 2.5, cost: 18000, distance: 65 },
        'Isla de los Palacios': { time: 3.0, cost: 20000, distance: 78 },
        'Puerto Ame': { time: 4.5, cost: 32000, distance: 125 },
        'Tangui': { time: 2.0, cost: 15000, distance: 52 },
    },
    'Boca de Bebará': {
        'Quibdó': { time: 5.5, cost: 38000, distance: 155 },
        'Beté': { time: 4.0, cost: 28000, distance: 110 },
        'Puné': { time: 5.0, cost: 35000, distance: 140 },
        'Isla de los Palacios': { time: 2.8, cost: 19000, distance: 72 },
        'Bellavista': { time: 3.2, cost: 24000, distance: 88 },
    },
    'Tangui': {
        'Quibdó': { time: 2.8, cost: 20000, distance: 75 },
        'Beté': { time: 3.5, cost: 22000, distance: 95 },
        'Puné': { time: 2.0, cost: 15000, distance: 52 },
        'Puerto Ame': { time: 3.8, cost: 26000, distance: 98 },
        'Bellavista': { time: 2.2, cost: 16000, distance: 58 },
    },
    'Isla de los Palacios': {
        'Puné': { time: 3.0, cost: 20000, distance: 78 },
        'Boca de Bebará': { time: 2.8, cost: 19000, distance: 72 },
        'Puerto Ame': { time: 1.5, cost: 12000, distance: 38 },
        'Bellavista': { time: 4.2, cost: 30000, distance: 115 },
    },
    'Bellavista': {
        'Quibdó': { time: 4.0, cost: 28000, distance: 105 },
        'Beté': { time: 1.8, cost: 14000, distance: 48 },
        'Boca de Bebará': { time: 3.2, cost: 24000, distance: 88 },
        'Tangui': { time: 2.2, cost: 16000, distance: 58 },
        'Puerto Ame': { time: 3.0, cost: 21000, distance: 82 },
    },
    'Puerto Ame': {
        'Puné': { time: 4.5, cost: 32000, distance: 125 },
        'Tangui': { time: 3.8, cost: 26000, distance: 98 },
        'Isla de los Palacios': { time: 1.5, cost: 12000, distance: 38 },
        'Bellavista': { time: 3.0, cost: 21000, distance: 82 },
    }
};

// Schedule data
let schedules = [
    {
        id: '1',
        origin: 'Quibdó',
        destination: 'Beté',
        departureTime: '07:30',
        arrivalTime: '10:30',
        status: 'departed',
        boat: 'Capital Express',
        capacity: 50,
        occupancy: 47,
    },
    {
        id: '2',
        origin: 'Beté',
        destination: 'Puné',
        departureTime: '08:00',
        arrivalTime: '10:30',
        status: 'on-time',
        boat: 'Río Atrato',
        capacity: 35,
        occupancy: 32,
    },
    {
        id: '3',
        origin: 'Puné',
        destination: 'Isla de los Palacios',
        departureTime: '09:15',
        arrivalTime: '12:15',
        status: 'boarding',
        boat: 'Chocó Express',
        capacity: 28,
        occupancy: 25,
    },
    {
        id: '4',
        origin: 'Tangui',
        destination: 'Quibdó',
        departureTime: '10:30',
        arrivalTime: '13:18',
        status: 'on-time',
        boat: 'Atrato Navigator',
        capacity: 42,
        occupancy: 38,
    },
    {
        id: '5',
        origin: 'Boca de Bebará',
        destination: 'Beté',
        departureTime: '11:45',
        arrivalTime: '15:45',
        status: 'delayed',
        boat: 'San Juan Navigator',
        capacity: 30,
        occupancy: 18,
    },
    {
        id: '6',
        origin: 'Puerto Ame',
        destination: 'Tangui',
        departureTime: '14:00',
        arrivalTime: '17:48',
        status: 'on-time',
        boat: 'Embera',
        capacity: 45,
        occupancy: 41,
    },
    {
        id: '7',
        origin: 'Quibdó',
        destination: 'Bellavista',
        departureTime: '15:20',
        arrivalTime: '19:20',
        status: 'on-time',
        boat: 'Pacífico Azul',
        capacity: 38,
        occupancy: 22,
    },
];

// Zones data
const zones = [
    {
        name: 'Quibdó',
        description: 'Capital del Chocó, principal hub de transporte fluvial',
        connections: 5,
        status: 'active',
        type: 'main',
    },
    {
        name: 'Beté',
        description: 'Puerto principal en el río Atrato, hub de conexiones',
        connections: 5,
        status: 'active',
        type: 'main',
    },
    {
        name: 'Puné',
        description: 'Puerto estratégico en la red fluvial del Chocó',
        connections: 5,
        status: 'active',
        type: 'main',
    },
    {
        name: 'Boca de Bebará',
        description: 'Puerto en la desembocadura del río Bebará',
        connections: 5,
        status: 'active',
        type: 'main',
    },
    {
        name: 'Tangui',
        description: 'Comunidad ribereña con conexiones múltiples',
        connections: 5,
        status: 'active',
        type: 'secondary',
    },
    {
        name: 'Isla de los Palacios',
        description: 'Puerto insular en el sistema fluvial chocoano',
        connections: 4,
        status: 'active',
        type: 'secondary',
    },
    {
        name: 'Bellavista',
        description: 'Puerto comunitario en el río San Juan',
        connections: 5,
        status: 'active',
        type: 'secondary',
    },
    {
        name: 'Puerto Ame',
        description: 'Terminal fluvial en la región del San Juan',
        connections: 4,
        status: 'active',
        type: 'secondary',
    },
];

// Payment methods configuration
const paymentMethods = {
    'cash': {
        name: 'Pago en Efectivo',
        requiresPhone: false
    },
    'transfer': {
        name: 'Transferencia Bancaria',
        requiresPhone: false
    },
    'nequi': {
        name: 'Nequi',
        requiresPhone: true
    },
    'daviplata': {
        name: 'DaviPlata',
        requiresPhone: true
    },
    'bancolombia': {
        name: 'Bancolombia App',
        requiresPhone: true
    }
};

// Global state
let currentRoute = null;
let currentTicket = null;
let currentPaymentMethod = 'cash';
let isProcessingPayment = false;

// Utility functions
function formatTime(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
    }).format(amount);
}

function formatDateTime(date) {
    return date.toLocaleString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

function formatTimeOnly(date) {
    return date.toLocaleTimeString('es-CO', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

function formatDateOnly(date) {
    return date.toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Tab functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Route calculator functionality
function initRouteCalculator() {
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    const calculateButton = document.getElementById('calculateRoute');
    const routeResult = document.getElementById('routeResult');

    // Populate origin select
    const destinations = Object.keys(routes);
    destinations.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        originSelect.appendChild(option);
    });

    // Handle origin change
    originSelect.addEventListener('change', () => {
        const origin = originSelect.value;
        
        // Clear and disable destination
        destinationSelect.innerHTML = '<option value="">Selecciona destino</option>';
        destinationSelect.disabled = !origin;
        calculateButton.disabled = true;
        
        if (origin && routes[origin]) {
            const availableDestinations = Object.keys(routes[origin]);
            availableDestinations.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                destinationSelect.appendChild(option);
            });
            destinationSelect.disabled = false;
        }
    });

    // Handle destination change
    destinationSelect.addEventListener('change', () => {
        const origin = originSelect.value;
        const destination = destinationSelect.value;
        calculateButton.disabled = !(origin && destination && origin !== destination);
    });

    // Handle calculate button
    calculateButton.addEventListener('click', () => {
        const origin = originSelect.value;
        const destination = destinationSelect.value;
        
        if (origin && destination && routes[origin] && routes[origin][destination]) {
            const route = routes[origin][destination];
            currentRoute = {
                origin,
                destination,
                ...route
            };
            
            // Update UI
            document.getElementById('travelTime').textContent = formatTime(route.time);
            document.getElementById('travelCost').textContent = formatCurrency(route.cost);
            document.getElementById('travelDistance').textContent = `${route.distance} km`;
            
            routeResult.classList.remove('hidden');
            
            // Update ticket tab
            updateTicketTab();
        }
    });
}

// Ticket functionality
function initTicketGenerator() {
    const passengerNameInput = document.getElementById('passengerName');
    const idNumberInput = document.getElementById('idNumber');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const generateButton = document.getElementById('generateTicket');
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');

    // Payment method change handler
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            currentPaymentMethod = radio.value;
            updatePhoneNumberVisibility();
            updateGenerateButton();
            updateTripSummary();
        });
    });

    // Input change handlers
    passengerNameInput.addEventListener('input', updateGenerateButton);
    idNumberInput.addEventListener('input', updateGenerateButton);
    phoneNumberInput.addEventListener('input', updateGenerateButton);

    // Generate button handler
    generateButton.addEventListener('click', handleGenerateTicket);
}

function updatePhoneNumberVisibility() {
    const phoneField = document.getElementById('phoneNumberField');
    const requiresPhone = paymentMethods[currentPaymentMethod].requiresPhone;
    
    if (requiresPhone) {
        phoneField.classList.remove('hidden');
    } else {
        phoneField.classList.add('hidden');
        document.getElementById('phoneNumber').value = '';
    }
}

function updateGenerateButton() {
    const passengerName = document.getElementById('passengerName').value.trim();
    const idNumber = document.getElementById('idNumber').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const generateButton = document.getElementById('generateTicket');
    
    const hasRoute = currentRoute !== null;
    const hasName = passengerName !== '';
    const hasId = idNumber !== '';
    const requiresPhone = paymentMethods[currentPaymentMethod].requiresPhone;
    const hasPhone = !requiresPhone || phoneNumber !== '';
    
    const isValid = hasRoute && hasName && hasId && hasPhone;
    generateButton.disabled = !isValid;
    
    // Update button text
    if (currentPaymentMethod === 'cash') {
        generateButton.textContent = 'Generar Ticket';
    } else {
        generateButton.textContent = 'Proceder al Pago';
    }
}

function updateTicketTab() {
    const ticketForm = document.getElementById('ticketForm');
    const noRouteMessage = document.getElementById('noRouteMessage');
    
    if (currentRoute) {
        ticketForm.classList.remove('hidden');
        noRouteMessage.classList.add('hidden');
        updateTripSummary();
    } else {
        ticketForm.classList.add('hidden');
        noRouteMessage.classList.remove('hidden');
    }
}

function updateTripSummary() {
    if (!currentRoute) return;
    
    const tripSummary = document.getElementById('tripSummary');
    tripSummary.innerHTML = `
        <div>
            <small>Ruta</small>
            <strong>${currentRoute.origin} → ${currentRoute.destination}</strong>
        </div>
        <div>
            <small>Distancia</small>
            <strong>${currentRoute.distance} km</strong>
        </div>
        <div>
            <small>Duración</small>
            <strong>${formatTime(currentRoute.time)}</strong>
        </div>
        <div>
            <small>Costo Total</small>
            <strong style="color: var(--green);">${formatCurrency(currentRoute.cost)}</strong>
        </div>
    `;
}

function handleGenerateTicket() {
    if (currentPaymentMethod === 'cash') {
        generateTicket('completed');
    } else {
        showPaymentDialog();
    }
}

function showPaymentDialog() {
    const dialog = document.getElementById('paymentDialog');
    const description = document.getElementById('paymentDialogDescription');
    const details = document.getElementById('paymentDetails');
    const errorDiv = document.getElementById('paymentError');
    
    const passengerName = document.getElementById('passengerName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const methodName = paymentMethods[currentPaymentMethod].name;
    
    description.textContent = `Confirma el pago de ${formatCurrency(currentRoute.cost)} con ${methodName}`;
    
    details.innerHTML = `
        <div>
            <small>Pasajero:</small>
            <strong>${passengerName}</strong>
        </div>
        <div>
            <small>Ruta:</small>
            <strong>${currentRoute.origin} → ${currentRoute.destination}</strong>
        </div>
        ${phoneNumber ? `
            <div style="grid-column: span 2;">
                <small>Teléfono:</small>
                <strong>${phoneNumber}</strong>
            </div>
        ` : ''}
        <div style="grid-column: span 2; padding-top: 0.5rem; border-top: 1px solid var(--border);">
            <small>Total a pagar:</small>
            <strong style="font-size: 1.125rem; color: var(--green);">${formatCurrency(currentRoute.cost)}</strong>
        </div>
    `;
    
    errorDiv.classList.add('hidden');
    dialog.classList.remove('hidden');
}

function closePaymentDialog() {
    const dialog = document.getElementById('paymentDialog');
    dialog.classList.add('hidden');
    isProcessingPayment = false;
    
    const confirmButton = document.getElementById('confirmPayment');
    confirmButton.innerHTML = '<i class="fas fa-check-circle"></i> Confirmar Pago';
    confirmButton.disabled = false;
}

function processPayment() {
    if (isProcessingPayment) return;
    
    isProcessingPayment = true;
    const confirmButton = document.getElementById('confirmPayment');
    const errorDiv = document.getElementById('paymentError');
    
    confirmButton.innerHTML = 'Procesando...';
    confirmButton.disabled = true;
    errorDiv.classList.add('hidden');
    
    // Simulate payment processing
    setTimeout(() => {
        const success = Math.random() > 0.1; // 90% success rate
        
        if (success) {
            generateTicket('completed');
            closePaymentDialog();
        } else {
            errorDiv.classList.remove('hidden');
            confirmButton.innerHTML = '<i class="fas fa-check-circle"></i> Reintentar Pago';
            confirmButton.disabled = false;
            isProcessingPayment = false;
        }
    }, 2000);
}

function generateTicket(paymentStatus) {
    if (!currentRoute) return;
    
    const passengerName = document.getElementById('passengerName').value.trim();
    const idNumber = document.getElementById('idNumber').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    
    const now = new Date();
    const departureTime = new Date(now.getTime() + 30 * 60000); // 30 min from now
    const arrivalTime = new Date(departureTime.getTime() + currentRoute.time * 60 * 60000);
    
    const ticketNumber = `FJ${Date.now().toString().slice(-6)}`;
    
    currentTicket = {
        ticketNumber,
        passengerName,
        idNumber,
        phoneNumber,
        route: currentRoute,
        departureTime,
        arrivalTime,
        issueDate: now,
        paymentMethod: currentPaymentMethod,
        paymentStatus,
    };
    
    renderTicket();
}

function renderTicket() {
    const ticketForm = document.getElementById('ticketForm');
    const ticketDisplay = document.getElementById('ticketDisplay');
    
    const paymentStatusBadge = getPaymentStatusBadge(currentTicket.paymentStatus);
    const methodName = paymentMethods[currentTicket.paymentMethod].name;
    
    ticketDisplay.innerHTML = `
        <div class="ticket">
            <div class="ticket-header">
                <h2>FLUVIAL JOURNEY</h2>
                <p>Transporte Fluvial del Chocó</p>
                <div class="ticket-badges">
                    <span class="badge badge-outline">Ticket #${currentTicket.ticketNumber}</span>
                    ${paymentStatusBadge}
                </div>
            </div>

            <div class="separator"></div>

            <div class="ticket-info">
                <div class="ticket-field">
                    <i class="fas fa-user" style="color: var(--blue);"></i>
                    <div>
                        <small>Pasajero</small>
                        <strong>${currentTicket.passengerName}</strong>
                    </div>
                </div>
                
                <div class="ticket-field">
                    <i class="fas fa-id-card" style="color: var(--blue);"></i>
                    <div>
                        <small>Documento</small>
                        <strong>${currentTicket.idNumber}</strong>
                    </div>
                </div>

                ${currentTicket.phoneNumber ? `
                    <div class="ticket-field">
                        <i class="fas fa-mobile-alt" style="color: var(--blue);"></i>
                        <div>
                            <small>Teléfono</small>
                            <strong>${currentTicket.phoneNumber}</strong>
                        </div>
                    </div>
                ` : ''}

                <div class="ticket-field">
                    <i class="fas fa-route" style="color: var(--green);"></i>
                    <div>
                        <small>Ruta</small>
                        <strong>${currentTicket.route.origin} → ${currentTicket.route.destination}</strong>
                    </div>
                </div>
                
                <div class="ticket-field">
                    <i class="fas fa-dollar-sign" style="color: var(--green);"></i>
                    <div>
                        <small>Valor</small>
                        <strong>${formatCurrency(currentTicket.route.cost)}</strong>
                    </div>
                </div>

                <div class="ticket-field">
                    <i class="fas fa-credit-card" style="color: var(--purple);"></i>
                    <div>
                        <small>Método de Pago</small>
                        <strong>${methodName}</strong>
                    </div>
                </div>
            </div>

            <div class="separator"></div>

            <div class="ticket-times">
                <div>
                    <i class="fas fa-clock" style="color: var(--orange); margin-bottom: 0.25rem;"></i>
                    <div>
                        <small>Salida</small>
                        <strong>${formatTimeOnly(currentTicket.departureTime)}</strong>
                        <small style="display: block; margin-top: 0.25rem;">${formatDateOnly(currentTicket.departureTime)}</small>
                    </div>
                </div>
                
                <div>
                    <i class="fas fa-clock" style="color: var(--purple); margin-bottom: 0.25rem;"></i>
                    <div>
                        <small>Llegada estimada</small>
                        <strong>${formatTimeOnly(currentTicket.arrivalTime)}</strong>
                        <small style="display: block; margin-top: 0.25rem;">${formatDateOnly(currentTicket.arrivalTime)}</small>
                    </div>
                </div>
                
                <div>
                    <i class="fas fa-map-marker-alt" style="color: var(--red); margin-bottom: 0.25rem;"></i>
                    <div>
                        <small>Distancia</small>
                        <strong>${currentTicket.route.distance} km</strong>
                    </div>
                </div>
            </div>

            <div class="separator"></div>

            <div class="ticket-footer">
                <p>Emitido el ${formatDateOnly(currentTicket.issueDate)} a las ${formatTimeOnly(currentTicket.issueDate)}</p>
                <p>Presente este ticket al momento del abordaje</p>
                <p>Válido únicamente para la fecha y hora indicadas</p>
                ${currentTicket.paymentMethod === 'cash' ? `
                    <p class="ticket-warning">
                        ⚠️ Recuerde pagar en efectivo al momento del abordaje
                    </p>
                ` : ''}
            </div>
        </div>

        <div class="ticket-actions">
            <button class="btn btn-outline" onclick="printTicket()">
                <i class="fas fa-print"></i>
                Imprimir Ticket
            </button>
            <button class="btn btn-outline" onclick="resetTicket()">
                <i class="fas fa-redo"></i>
                Generar Nuevo
            </button>
        </div>
    `;
    
    ticketForm.classList.add('hidden');
    ticketDisplay.classList.remove('hidden');
}

function getPaymentStatusBadge(status) {
    switch (status) {
        case 'completed':
            return '<span class="badge badge-green">Pagado</span>';
        case 'pending':
            return '<span class="badge badge-yellow">Pendiente</span>';
        case 'failed':
            return '<span class="badge badge-red">Falló</span>';
        default:
            return '<span class="badge badge-outline">Pendiente</span>';
    }
}

function printTicket() {
    window.print();
}

function resetTicket() {
    currentTicket = null;
    document.getElementById('ticketForm').classList.remove('hidden');
    document.getElementById('ticketDisplay').classList.add('hidden');
    document.getElementById('passengerName').value = '';
    document.getElementById('idNumber').value = '';
    document.getElementById('phoneNumber').value = '';
    document.querySelector('input[name="paymentMethod"][value="cash"]').checked = true;
    currentPaymentMethod = 'cash';
    updatePhoneNumberVisibility();
    updateGenerateButton();
    updateTripSummary();
}

// Schedule functionality
function initScheduleBoard() {
    renderSchedule();
    updateCurrentTime();
    
    // Update time every second
    setInterval(updateCurrentTime, 1000);
    
    // Simulate real-time updates
    setInterval(() => {
        schedules = schedules.map(schedule => {
            if (Math.random() > 0.95) {
                if (schedule.status === 'on-time' && Math.random() > 0.7) {
                    return { ...schedule, status: 'boarding' };
                }
                if (schedule.status === 'boarding' && Math.random() > 0.6) {
                    return { ...schedule, status: 'departed' };
                }
                if (schedule.occupancy < schedule.capacity && Math.random() > 0.8) {
                    return { 
                        ...schedule, 
                        occupancy: Math.min(schedule.capacity, schedule.occupancy + 1) 
                    };
                }
            }
            return schedule;
        });
        renderSchedule();
    }, 3000);
}

function updateCurrentTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleTimeString('es-CO');
}

function renderSchedule() {
    const scheduleList = document.getElementById('scheduleList');
    
    scheduleList.innerHTML = schedules.map(schedule => {
        const statusClass = getStatusClass(schedule.status);
        const statusText = getStatusText(schedule.status);
        const occupancyColor = getOccupancyColor(schedule.occupancy, schedule.capacity);
        
        return `
            <div class="schedule-item">
                <div class="schedule-content">
                    <div class="schedule-route">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>${schedule.origin} → ${schedule.destination}</strong>
                            <br><small>${schedule.boat}</small>
                        </div>
                    </div>

                    <div class="schedule-times">
                        <div class="time-info">
                            <small>Salida</small>
                            <strong>${schedule.departureTime}</strong>
                        </div>
                        <div class="time-info">
                            <small>Llegada</small>
                            <strong>${schedule.arrivalTime}</strong>
                        </div>
                    </div>

                    <div class="schedule-status">
                        <span class="badge ${statusClass}">${statusText}</span>
                        <div class="time-info">
                            <small>Ocupación</small>
                            <strong style="color: ${occupancyColor};">${schedule.occupancy}/${schedule.capacity}</strong>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function getStatusClass(status) {
    switch (status) {
        case 'on-time': return 'badge-green';
        case 'delayed': return 'badge-red';
        case 'boarding': return 'badge-blue';
        case 'departed': return 'badge-gray';
        default: return 'badge-gray';
    }
}

function getStatusText(status) {
    switch (status) {
        case 'on-time': return 'A tiempo';
        case 'delayed': return 'Retrasado';
        case 'boarding': return 'Abordando';
        case 'departed': return 'Partió';
        default: return 'Desconocido';
    }
}

function getOccupancyColor(occupancy, capacity) {
    const percentage = (occupancy / capacity) * 100;
    if (percentage >= 90) return '#dc2626';
    if (percentage >= 75) return '#ea580c';
    return '#15803d';
}

// Zones functionality
function initZones() {
    renderZones();
}

function renderZones() {
    const activeZones = zones.filter(zone => zone.status === 'active');
    const futureZones = zones.filter(zone => zone.status === 'coming-soon');
    
    document.getElementById('activeZones').innerHTML = activeZones.map(zone => {
        const badgeClass = zone.type === 'main' ? 'badge-blue' : 'badge-green';
        const badgeText = zone.type === 'main' ? 'Puerto Principal' : 'Puerto Secundario';
        
        return `
            <div class="zone-card">
                <div class="zone-header">
                    <div class="zone-title">${zone.name}</div>
                    <span class="badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="zone-description">${zone.description}</div>
                <div class="zone-connections">
                    <i class="fas fa-users"></i>
                    <span>${zone.connections} conexiones disponibles</span>
                </div>
            </div>
        `;
    }).join('');
    
    if (futureZones.length > 0) {
        document.getElementById('futureZones').classList.remove('hidden');
        document.getElementById('futureZones').querySelector('.zones-grid').innerHTML = futureZones.map(zone => `
            <div class="zone-card" style="background: #f9fafb;">
                <div class="zone-header">
                    <div class="zone-title" style="color: #6b7280;">${zone.name}</div>
                    <span class="badge badge-yellow">Próximamente</span>
                </div>
                <div class="zone-description">${zone.description}</div>
            </div>
        `).join('');
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initRouteCalculator();
    initTicketGenerator();
    initScheduleBoard();
    initZones();
    updateTicketTab();
    updatePhoneNumberVisibility();
    updateGenerateButton();
});