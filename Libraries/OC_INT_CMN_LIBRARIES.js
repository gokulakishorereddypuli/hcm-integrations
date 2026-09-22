/******************************************
* Name       :   OC_INT_CMN_LIBRARIES     *
* Identifier :   OC_INT_CMN_LIBRARIE      *
******************************************/

function isExtractRunning(extractStatus) {
    var outputStatus="False";
    if (!extractStatus) {
        return outputStatus;
    }

    const status = extractStatus.toUpperCase();

    const runningStatuses = [
        "ESS_PARENT_JOB_SUBMITTED",
        "ESS_CHILD_JOB_SUBMITTED",
        "PROCESSING",
        "IN_PROCESSING",
        "IN_PROGRESS",
        "PROGRESS",
        "INITIALIZING",
        "STARTED"
    ];
    outputStatus=(runningStatuses.includes(status) ? "False" : "True");
    return outputStatus;
}

/**
 * Generates an OIC Integration Status email HTML string dynamically 
 * using individual parameters.
 * @param {string} riceId - The RICE ID value.
 * @param {string} intName - The Integration Name value.
 * @param {string} intVersion - The Integration Version value.
 * @param {string} transTime - The Transaction Time value.
 * @param {string} status - The Status value (e.g., Success, Failed).
 * @returns {string} - The complete HTML string.
 */

function generateOICEmailHTML(riceId, intName, intVersion, transTime, status) {
  // Use 'var' instead of 'const'/'let' for OIC compatibility
  var statusStyle = "font-weight: bold;";
  
  // Safe check for status in case it is passed as null
  var lowerStatus = status ? status.toLowerCase() : "";
  
  if (lowerStatus === "success") {
    statusStyle += " color: green;";
  } else if (lowerStatus === "failed" || lowerStatus === "error") {
    statusStyle += " color: red;";
  }

  // Use standard string concatenation with single quotes for HTML attributes
  var htmlString = "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <meta charset='UTF-8'>\n" +
    "  <title>OIC Integration Status</title>\n" +
    "</head>\n" +
    "<body style='font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;'>\n" +
    "  <table width='100%' cellpadding='0' cellspacing='0' border='0' style='max-width: 700px; margin: auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 6px;'>\n" +
    "    <tr>\n" +
    "      <td style='background-color: #0073b7; color: #ffffff; padding: 15px; font-size: 20px; font-weight: bold; text-align: center;'>\n" +
    "        Oracle Integration Cloud - Integration Status Report\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td style='padding: 20px;'>\n" +
    "        <p style='font-size: 14px; color: #333333; margin-bottom: 20px;'>\n" +
    "          Below is the latest status of your OIC integrations:\n" +
    "        </p>\n" +
    "        <table width='100%' cellpadding='8' cellspacing='0' border='1' style='border-collapse: collapse; border-color: #ccc; font-size: 14px;'>\n" +
    "          <thead style='background-color: #f0f0f0;'>\n" +
    "            <tr>\n" +
    "              <th align='left'>Summary</th>\n" +
    "              <th align='left'>Comments</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr><td>RICE ID</td><td>" + riceId + "</td></tr>\n" +
    "            <tr><td>Integration Name</td><td>" + intName + "</td></tr>\n" +
    "            <tr><td>Integration Version</td><td>" + intVersion + "</td></tr>\n" +
    "            <tr><td>Transaction Time</td><td>" + transTime + "</td></tr>\n" +
    "            <tr><td>Status</td><td align='left' style='" + statusStyle + "'>" + status + "</td></tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "        <p style='font-size: 12px; color: #777777; margin-top: 20px;'>\n" +
    "          *This is an automated message from Oracle Integration Cloud. Please do not reply.*\n" +
    "        </p>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </table>\n" +
    "</body>\n" +
    "</html>";

  return htmlString;
}

function generateRandomOTP() {
// Pool containing uppercase, lowercase, numbers, and special characters
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
  var code = "";
  
  // Loop 9 times to pick a random character from the expanded pool
  for (var i = 0; i < 9; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    code += chars.charAt(randomIndex);
  }
  
  return code;
}



/**
 * ==============================================================================
 * OIC Helper Function: generateSingleFileEmailHTMLBody
 * ==============================================================================
 * Description: Dynamically generates a modern, styled HTML email template 
 *              featuring status-based color badges and file attachment details.
 * 
 * Parameters:
 *   @param {string} riceId    - The unique RICE ID for the integration process.
 *   @param {string} intName   - The name of the Oracle Integration.
 *   @param {string} intVersion- The version of the integration flow.
 *   @param {string} transTime - The timestamp when the transaction executed.
 *   @param {string} status    - The execution status (e.g., 'Success', 'Failed').
 *   @param {string} fileName  - The name of the file attached to the email.
 * 
 * Returns:
 *   @returns {string} Fully constructed HTML string ready for OIC notifications.
 * ==============================================================================
 */
function generateSingleFileEmailHTMLBody(riceId, intName, intVersion, transTime, status, fileName) {
  
  // 1. Data Normalization & Null Safety Checks
  var currentStatus = status ? status.trim() : "Completed Successfully";
  var lowerStatus = currentStatus.toLowerCase();
  
  // 2. Dynamic Badge Color Configuration
  var badgeBg = "#d1fae5";   // Soft green
  var badgeColor = "#065f46"; // Dark green
  
  if (lowerStatus === "failed" || lowerStatus === "error") {
    badgeBg = "#fee2e2";     // Soft red
    badgeColor = "#991b1b";   // Dark red
  } else if (lowerStatus === "in progress" || lowerStatus === "pending") {
    badgeBg = "#fef3c7";     // Soft yellow
    badgeColor = "#92400e";   // Dark yellow/brown
  }

  var fName = fileName ? fileName : "Report_Output.csv";
  var rId = riceId ? riceId : "N/A";
  var iName = intName ? intName : "N/A";
  var iVer = intVersion ? intVersion : "1.0";
  var tTime = transTime ? transTime : "N/A";

  // 3. HTML String Construction
  var htmlString = "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta charset='UTF-8'>\n" +
    "    <title>Integration Notification</title>\n" +
    "    <style>\n" +
    "        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #334155; }\n" +
    "        .email-wrapper { width: 100%; background-color: #f8fafc; padding: 40px 0; }\n" +
    "        .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }\n" +
    "        .email-header { background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff; padding: 25px 20px; text-align: center; }\n" +
    "        .email-body { padding: 30px; }\n" +
    "        /* Table Layout Styling */\n" +
    "        .summary-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }\n" +
    "        .summary-table th { background-color: #ea580c; color: #ffffff; text-align: left; padding: 12px 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }\n" +
    "        .summary-table td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid #f1f5f9; text-align: left; vertical-align: middle; }\n" +
    "        .summary-table tr:last-child td { border-bottom: none; }\n" +
    "        .label-cell { color: #64748b; font-weight: 600; width: 35%; background-color: #fafaf9; }\n" +
    "        .value-cell { color: #1e293b; font-weight: 600; width: 65%; }\n" +
    "        /* Status Badge Style */\n" +
    "        .status-badge { background-color: " + badgeBg + "; color: " + badgeColor + "; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-block; }\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <div class='email-wrapper'>\n" +
    "        <div class='email-container'>\n" +
    "            <!-- Header -->\n" +
    "            <div class='email-header'>\n" +
    "                <h1 style='margin: 0; font-size: 20px; font-weight: 700;'>Oracle Integration Cloud</h1>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Body Content -->\n" +
    "            <div class='email-body'>\n" +
    "                <div style='font-size: 16px; font-weight: 600; color: #1e293b; margin-bottom: 8px;'>Hello,</div>\n" +
    "                <div style='font-size: 14px; color: #64748b; line-height: 1.5; margin-bottom: 20px;'>Your integration execution has completed. Review the execution summary and attached file below:</div>\n" +
    "                \n" +
    "                <!-- Left-Aligned Table Structure -->\n" +
    "                <table class='summary-table'>\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th colspan='2'>Execution Summary</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr>\n" +
    "                            <td class='label-cell'>RICE ID</td>\n" +
    "                            <td class='value-cell'>" + rId + "</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td class='label-cell'>Integration Name</td>\n" +
    "                            <td class='value-cell'>" + iName + "</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td class='label-cell'>Version</td>\n" +
    "                            <td class='value-cell'>" + iVer + "</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td class='label-cell'>Timestamp</td>\n" +
    "                            <td class='value-cell'>" + tTime + "</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td class='label-cell'>Status</td>\n" +
    "                            <td class='value-cell'><span class='status-badge'>" + currentStatus + "</span></td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "\n" +
    "                <!-- Attachment Section -->\n" +
    "                <div style='font-size: 13px; font-weight: 700; text-transform: uppercase; color: #ea580c; margin-bottom: 8px; letter-spacing: 0.5px;'>Attached File</div>\n" +
    "                <div style='background-color: #fff7ed; border: 1px dashed #fdba74; border-radius: 8px; padding: 14px 16px; display: flex; align-items: center;'>\n" +
    "                    <span style='font-size: 20px; margin-right: 12px;'>📎</span>\n" +
    "                    <div>\n" +
    "                        <div style='font-size: 14px; font-weight: 600; color: #9a3412;'>" + fName + "</div>\n" +
    "                        <div style='font-size: 11px; color: #c2410c;'>Ready for download</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Footer -->\n" +
    "            <div style='background-color: #f8fafc; text-align: center; padding: 18px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;'>\n" +
    "                This is an automated notification generated by Oracle Integration Cloud (OIC). Please do not reply directly to this email.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</body>\n" +
    "</html>";

  return htmlString;
}

