// Data barang yang tersedia di kasir
const items = [
  { id: 1, name: "Roti", price: 10000 },
  { id: 2, name: "Susu", price: 6000 },
  { id: 3, name: "Telur", price: 2500 },
  { id: 4, name: "Kopi", price: 8000 },
  { id: 5, name: "Teh", price: 5000 }
];

// Riwayat pembelian
let purchaseHistory = [];

// Fungsi untuk menampilkan daftar barang
function displayItems() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';
  items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.id}. ${item.name} - Rp ${item.price}`;
      itemList.appendChild(listItem);
  });
}

// Fungsi untuk membeli barang
function buyItem() {
  const itemId = parseInt(document.getElementById('item-id').value);
  const quantity = parseInt(document.getElementById('quantity').value);
  
  const item = items.find(i => i.id === itemId);
  
  if (item && quantity > 0) {
      const cost = item.price * quantity;

      purchaseHistory.push({
          name: item.name,
          quantity: quantity,
          cost: cost
      });

      alert(`Berhasil membeli ${item.name} sebanyak ${quantity} dengan total Rp ${cost}`);
  } else {
      alert("Barang tidak ditemukan atau jumlah tidak valid!");
  }
}

// Fungsi untuk menampilkan riwayat pembelian
function showPurchaseHistory() {
  const historyDiv = document.getElementById('purchase-history');
  historyDiv.innerHTML = '';

  if (purchaseHistory.length === 0) {
      historyDiv.textContent = "Belum ada riwayat pembelian.";
      return;
  }

  purchaseHistory.forEach((purchase, index) => {
      const historyItem = document.createElement('div');
      historyItem.textContent = `Transaksi ${index + 1}: ${purchase.name} x${purchase.quantity} = Rp ${purchase.cost}`;
      historyDiv.appendChild(historyItem);
  });

  const totalAmount = purchaseHistory.reduce((sum, purchase) => sum + purchase.cost, 0);
  const totalDiv = document.createElement('div');
  totalDiv.textContent = `Total Pendapatan: Rp ${totalAmount}`;
  historyDiv.appendChild(totalDiv);
}

// Menampilkan daftar barang saat halaman dimuat
window.onload = displayItems;
