# Dev Token Injector Chrome Extension

## Overview
The Dev Token Injector is a Chrome extension that automatically adds the query parameter `dev_token=TRUE` to various types of web requests. This is particularly useful for development and testing environments where you need to consistently append this parameter to all requests.

## Features
- Automatically injects `dev_token=TRUE` to URLs
- Works with multiple resource types:
  - Web Pages (main frames)
  - JavaScript files
  - CSS files
  - iFrames
  - AJAX/XMLHttpRequests
- Simple, lightweight interface
- No configuration needed - works out of the box

## Installation

### From Source
1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top right corner
4. Click "Load unpacked"
5. Select the directory containing the extension files

### Required Files
The extension consists of three files:
- `manifest.json`: Extension configuration
- `background.js`: Core functionality
- `popup.html`: User interface

## How It Works
The extension uses Chrome's `declarativeNetRequest` API to intercept and modify web requests. When a request is made for any supported resource type, the extension automatically adds `dev_token=TRUE` to the URL's query parameters before the request is completed.

### Supported Resource Types
- `main_frame`: Main page loads
- `script`: JavaScript files
- `stylesheet`: CSS files
- `sub_frame`: iFrames
- `xmlhttprequest`: AJAX requests

## Usage
1. Install the extension
2. The extension will automatically start working - no additional configuration required
3. Click the extension icon in the Chrome toolbar to see its status
4. All supported requests will automatically have `dev_token=TRUE` added to their URLs

### Example
Original URL:
```
https://example.com/script.js
```

Modified URL:
```
https://example.com/script.js?dev_token=TRUE
```

## Technical Details

### Permissions
The extension requires the following permissions:
- `declarativeNetRequest`: For modifying web requests
- `storage`: For potential future configuration storage
- `<all_urls>`: To work across all websites

### Architecture
- Uses Manifest V3
- Implements modern Chrome extension best practices
- Uses the declarative network request API for better performance and security

## Troubleshooting

### Common Issues
1. Extension not working on certain sites
   - Check if the site is accessible
   - Verify the extension is enabled
   - Check Chrome's console for any errors

2. Parameter not being added
   - Ensure the resource type is supported
   - Check if the URL already has the parameter

## Development

### Building from Source
1. Create a new directory for the extension
2. Copy the three required files into the directory
3. Load the extension in Chrome using Developer mode

### Making Changes
1. Modify the files as needed
2. Return to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## Contributing
Feel free to submit issues and enhancement requests!

## License
This project is licensed under the MIT License - see the LICENSE file for details