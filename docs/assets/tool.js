'use strict';
(() => {
  function averageRate(people, transactions, minutes) {
    const values = [people, transactions, minutes];
    if (values.some(value => !Number.isFinite(value) || value <= 0)) throw new Error('Enter finite values greater than zero.');
    if (!Number.isInteger(people) || people > 10000000 || transactions < 0.000001 || transactions > 1000000 || minutes < 0.000001 || minutes > 10080) throw new Error('Use whole people from 1 to 10,000,000, transactions from 0.000001 to 1,000,000 and a window from 0.000001 to 10,080 minutes.');
    const total = people * transactions;
    const perSecond = total / (minutes * 60);
    return {total, perSecond, perMinute: total / minutes};
  }
  // Exposed only for transparent arithmetic checks; no scoring, networking or storage.
  globalThis.AdvisoryMath = Object.freeze({averageRate});
  if (typeof document === 'undefined') return;
  const form = document.querySelector('[data-tool]');
  const output = document.querySelector('[data-result-body]');
  const brief = document.querySelector('[data-brief]');
  const resultStatus = document.querySelector('[data-result-status]');
  const error = document.querySelector('[data-form-error]');
  function show(lines, title, bodyLines) {
    output.replaceChildren();
    const heading = document.createElement('h2'); heading.textContent = title; output.append(heading);
    for (const line of bodyLines) { const paragraph = document.createElement('p'); paragraph.textContent = line; output.append(paragraph); }
    if (lines.length) {
      const list = document.createElement('ol');
      for (const line of lines) { const item = document.createElement('li'); item.textContent = line; list.append(item); }
      output.append(list);
    }
    document.querySelector('[data-result-actions]').hidden = false;
    resultStatus.textContent = 'Your local discussion brief is ready. No information was sent.';
    brief.value = [document.body.dataset.project, '', ...bodyLines, ...lines.map(line => '- ' + line), '', 'Request: I would like to clarify these evidence questions and discuss whether a scoped collaboration would be useful.', '', 'This is a self-reported discussion brief. It is not an assessment, benchmark, test result or release approval.', 'Please remove sensitive information before choosing an approved private contact channel.'].join('\n');
    document.querySelector('[data-result]').focus();
  }
  if (form) {
    form.hidden = false;
    form.addEventListener('submit', event => {
      event.preventDefault(); error.textContent = '';
      if (!form.reportValidity()) return;
      const values = new FormData(form);
      if (form.dataset.tool === 'questions') {
        const followups = [], recorded = [];
        for (const fieldset of form.querySelectorAll('fieldset')) {
          const answer = values.get(fieldset.dataset.question);
          if (!['discussed','clarify','unknown'].includes(answer)) { error.textContent = 'Choose an answer for each question.'; return; }
          const text = fieldset.querySelector('legend').textContent;
          recorded.push(text + ' — ' + ({discussed:'Already discussed',clarify:'Needs clarification',unknown:'Not sure'}[answer]));
          if (answer !== 'discussed') followups.push(fieldset.dataset.followup);
        }
        const commentary = followups.length ? ['The following questions come from the items you marked for clarification or as not sure. They are not a risk ranking.'] : ['All items are marked already discussed. This records your answers; it does not validate the evidence or indicate release readiness. Ask whether the evidence is relevant to the actual change.'];
        show(followups, 'Questions to bring to a conversation', commentary);
        brief.value += '\n\nYour recorded answers:\n' + recorded.map(line => '- ' + line).join('\n');
      } else if (form.dataset.tool === 'workload') {
        try {
          const people = Number(values.get('people')), transactions = Number(values.get('transactions')), minutes = Number(values.get('minutes'));
          const result = averageRate(people, transactions, minutes);
          const format = number => new Intl.NumberFormat('en', {maximumFractionDigits:6}).format(number);
          show(['Is demand spread evenly or concentrated in bursts?', 'Which business journey and background activity need to be discussed?', 'Who can confirm authorised environments and applicable provider conditions?'], 'A demand assumption to discuss', [
            `Assumptions: ${format(people)} active people, ${format(transactions)} business transactions per person over ${format(minutes)} minutes.`,
            `Arithmetic: ${format(result.total)} business transactions in the window; about ${format(result.perSecond)} business transactions per second on average.`,
            'Formula: people × transactions per person ÷ (window minutes × 60). This assumes every entered person performs the entered transaction count in that window.',
            'This is not HTTP requests per second, a concurrency estimate, a peak prediction, measured traffic, a test design or a capacity result.'
          ]);
        } catch (problem) { error.textContent = problem.message; error.focus(); }
      } else if (form.dataset.tool === 'router') {
        const surface = form.querySelector('[name=surface]');
        const decision = form.querySelector('[name=decision]');
        const surfaceLabel = surface.selectedOptions[0].textContent;
        const decisionLabel = decision.selectedOptions[0].textContent;
        const paths = {sap:'SAP Testing Readiness',servicenow:'ServiceNow Testing Readiness',salesforce:'Salesforce Release Confidence',dynamics:'Dynamics 365 Testing Navigator',portal:'Web Portal Quality Guide',cross:'Digital Platform Testing Guide'};
        const next = {release:'Ask which business outcome needs acceptance and who owns the remaining evidence question.',performance:'Read Platform Performance Brief and clarify the user outcome, demand assumptions and authorised scope.',ai:'Read AI Testing Evidence Guide and clarify acceptable behaviour, evidence limits and human decision ownership.',accessibility:'Read Web Portal Quality Guide and clarify user needs, journey scope and human evaluation evidence.'};
        show([`Start with ${paths[values.get('surface')]}.`,next[values.get('decision')]], 'A reading path for your decision', [`Surface: ${surfaceLabel}. Decision: ${decisionLabel}.`, 'This suggestion follows your selection. It does not diagnose a system or choose an implementation approach.']);
      }
    });
    form.addEventListener('reset', () => {
      output.replaceChildren(); const paragraph = document.createElement('p'); paragraph.textContent = 'Your discussion brief will appear here after you complete the tool.'; output.append(paragraph);
      brief.value = ''; document.querySelector('[data-result-actions]').hidden = true; resultStatus.textContent = ''; error.textContent = '';
      for (const status of document.querySelectorAll('[data-action-status]')) status.textContent = '';
    });
  }
  for (const button of document.querySelectorAll('[data-copy]')) {
    button.addEventListener('click', async () => {
      const target = document.querySelector(button.dataset.copy), status = document.querySelector('[data-action-status]');
      try {
        if (!navigator.clipboard || !globalThis.isSecureContext) throw new Error('Clipboard API unavailable');
        await navigator.clipboard.writeText(target.value); status.textContent = 'Copied locally. Review before sharing.';
      } catch {
        target.focus(); target.select(); status.textContent = 'Automatic copying is unavailable. The text is selected; use your browser’s Copy command.';
      }
    });
  }
  for (const button of document.querySelectorAll('[data-download]')) {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.download), status = document.querySelector('[data-action-status]');
      try {
        const blob = new Blob([target.value], {type:'text/plain;charset=utf-8'}); const url = URL.createObjectURL(blob);
        const link = document.createElement('a'); link.href = url; link.download = document.body.dataset.slug + '-discussion-brief.txt'; link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000); status.textContent = 'Local download requested. No information was sent.';
      } catch { status.textContent = 'The download could not be prepared. Select and copy the brief instead.'; }
    });
  }
})();
