*** Settings ***
Library    Browser

*** Variables ***
${EMAIL}       %{USER_EMAIL=antnnks@gmail.com}
${PASSWORD}    %{USER_PASSWORD=Tagesspiegel_123}

*** Test Cases ***
Anmelden Test
    # New Browser  browser=chromium    headless=False
    # New Page     https://www.tagesspiegel.de/
    
    Open Browser To Tagesspiegel
    Click        iframe[title="Iframe title"] >>> role=button[name="Alle akzeptieren"]
    Click        role=link[name="Anmelden"]
    Fill Text    id=modal-iframe >>> role=textbox[name="E-Mail"]      ${EMAIL}
    Click        id=modal-iframe >>> role=textbox[name="Passwort"]
    Fill Text    id=modal-iframe >>> role=textbox[name="Passwort"]    ${PASSWORD}
    Click        id=modal-iframe >>> role=button[name="Anmelden"]
    Wait For Elements State    id=modal-iframe    hidden     timeout=15s
    Wait For Elements State    role=button[name="Mein Konto"]    visible    timeout=15s
    # Fill Secret    ${EMAIL}       %{USER_EMAIL}
    # Fill Secret    ${PASSWORD}    %{USER_PASSWORD}
    [Teardown]

*** Keywords ***
Open Browser To Tagesspiegel
    New Browser    browser=chromium    headless=False
    New Page       https://www.tagesspiegel.de/
