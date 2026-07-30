concat(
  '<body style="margin:0;padding:20px;font-family:sans-serif;background:#f8f9fa;color:#333;">',
    '<div style="max-width:550px;margin:0 auto;background:#fff;border:1px solid #e0e0e0;border-radius:6px;box-shadow:0 2px 4px rgba(0,0,0,0.05);overflow:hidden;">',
      
      '<!-- Header -->',
      '<div style="background:#0d6efd;color:#fff;padding:16px;text-align:center;">',
        '<h3 style="margin:0;font-size:18px;">OIC Notification Service</h3>',
        '<span style="background:rgba(255,255,255,0.2);display:inline-block;margin-top:5px;padding:2px 8px;font-size:11px;font-weight:bold;border-radius:4px;">RICE: ', /ns12:execute/ns9:request-wrapper/ns9:riceId, '</span>',
      '</div>',

      '<!-- Body Container -->',
      '<div style="padding:20px;">',

        '<!-- Combined Details Table -->',
        '<table style="width:100%;font-size:13px;border-collapse:collapse;margin-bottom:20px;">',
          '<tr style="background:#f8f9fa;"><td style="padding:6px;font-weight:bold;width:40%;">Integration Name:</td><td style="padding:6px;">', /ns12:execute/ns9:request-wrapper/ns9:Integration_Details/ns9:Integration_Name, '</td></tr>',
          '<tr><td style="padding:6px;font-weight:bold;">ID / Version:</td><td style="padding:6px;">', /ns12:execute/ns9:request-wrapper/ns9:Integration_Details/ns9:Integration_Identifier, ' (v', /ns12:execute/ns9:request-wrapper/ns9:Integration_Details/ns9:Integration_Version, ')</td></tr>',
          '<tr style="background:#f8f9fa;"><td style="padding:6px;font-weight:bold;">Instance ID:</td><td style="padding:6px;font-weight:bold;color:#0d6efd;">', /ns12:execute/ns9:request-wrapper/ns9:Runtime_Details/ns9:Instance_ID, '</td></tr>',
          '<tr><td style="padding:6px;font-weight:bold;">Invoked By:</td><td style="padding:6px;">',  /ns12:execute/ns9:request-wrapper/ns9:Runtime_Details/ns9:Invoke_By, '</td></tr>',
          '<tr style="background:#f8f9fa;"><td style="padding:6px;font-weight:bold;">Environment:</td><td style="padding:6px;">',/ns12:execute/ns9:request-wrapper/ns9:Environment_Details/ns9:Service_Instance_Name, '</td></tr>',
          '<tr style="background:#f8f9fa;"><td style="padding:6px;font-weight:bold;">Status:</td><td style="padding:6px;">',/ns12:execute/ns9:request-wrapper/ns9:Status, '</td></tr>',
          '<tr style="background:#f8f9fa;"><td style="padding:6px;font-weight:bold;">Error:</td><td style="padding:6px;">',/ns12:execute/ns9:request-wrapper/ns9:Error_Message, '</td></tr>',
        '</table>',

        '<!-- Action Button -->',
        '<div style="text-align:center;">',
          '<a href="', /ns12:execute/ns9:request-wrapper/ns9:Environment_Details/ns9:OIC_Base_URL, '" target="_blank" style="display:inline-block;padding:8px 16px;font-size:13px;font-weight:bold;color:#0d6efd;text-decoration:none;border:1px solid #0d6efd;border-radius:4px;">View Console</a>',
        '</div>',

      '</div>',

      '<!-- Footer -->',
      '<div style="background:#f8f9fa;border-top:1px solid #e0e0e0;padding:12px;text-align:center;font-size:11px;color:#6c757d;">',
        'Automated operational email. Please do not reply.',
      '</div>',

    '</div>',
  '</body>'
)
