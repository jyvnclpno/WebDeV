/* ============================================================
   tenant-tickets.js — HomeSync Tenant Tickets
   ============================================================ */

function showToast(msg, type = '') {
  const wrap = document.getElementById('toast-wrap');
  if (!wrap) return;
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.textContent = msg;
  wrap.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Submit new ticket
(function initTicketForm() {
  const btn = document.querySelector('.btn-green[style*="Submit"]') || 
    Array.from(document.querySelectorAll('.btn-green')).find(b => b.textContent.includes('Submit'));
  if (!btn) return;

  btn.addEventListener('click', function () {
    const titleInput = document.querySelector('.form-group input[type="text"]');
    const descInput = document.querySelector('textarea');
    if (!titleInput || !titleInput.value.trim()) {
      showToast('⚠️ Please enter an issue title.', 'error');
      return;
    }
    if (!descInput || !descInput.value.trim()) {
      showToast('⚠️ Please describe the issue.', 'error');
      return;
    }
    showToast('🔧 Ticket submitted! We\'ll review it shortly.', 'success');
    titleInput.value = '';
    descInput.value = '';
  });
})();
