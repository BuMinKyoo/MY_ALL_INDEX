const chunks = [];
process.stdin.on('data', chunk => chunks.push(chunk));
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(chunks.join(''));
    const model = data.model?.display_name || 'Claude';
    const fiveHour = data.rate_limits?.five_hour;

    if (fiveHour) {
      const usedPct = Math.round(fiveHour.used_percentage || 0);
      const remainPct = 100 - usedPct;
      const resetsAt = fiveHour.resets_at;
      let resetStr = '';
      if (resetsAt) {
        const resetDate = new Date(resetsAt * 1000);
        const hours = resetDate.getHours().toString().padStart(2, '0');
        const minutes = resetDate.getMinutes().toString().padStart(2, '0');
        resetStr = ` | 초기화: ${hours}:${minutes}`;
      }
      process.stdout.write(`[${model}] 남은: ${remainPct}%${resetStr}`);
    } else {
      process.stdout.write(`[${model}]`);
    }
  } catch (e) {
    process.stdout.write('Pro: N/A');
  }
});
