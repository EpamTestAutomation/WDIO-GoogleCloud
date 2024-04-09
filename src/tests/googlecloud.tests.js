import { Key } from 'webdriverio'

describe('Create an estimate in Google Cloud Calculator', () => {

    beforeEach(async () => {
        await browser.url('https://cloud.google.com/');
    })

    it('Search for "Google Cloud Platform Pricing Calculator"', async () => {
        try {
            //Click on the search icon. 
            await $('div.p1o4Hf').click()

            //Enter "Google Cloud Platform Pricing Calculator"
            const inputSearch = await $('div.YSM5S input')
            await inputSearch.waitForDisplayed()
            await inputSearch.setValue('Google Cloud Platform Pricing Calculator')

            //Perform the search
            const searchButton = await $('div.mb2a7b [role="button"]')
            await searchButton.waitForDisplayed()
            await searchButton.waitForClickable()
            await searchButton.click()

            await inputSearch.clearValue()

            //Click "Google Cloud Platform Pricing Calculator" and go to the calculator page.
            const searchOption = await $('.x9K9hf.sJb7xe .x9K9hf.wVBoU:nth-child(2) .x9K9hf.QKrqHf > a')
            await searchOption.waitForDisplayed()
            await searchOption.waitForClickable()
            await searchOption.click()

            //Find external iframes 
            await browser.switchToFrame(0)

            //Find internal iframes 
            const innerFrame = await $('iframe#myFrame')
            await browser.switchToFrame(innerFrame)

            //Click COMPUTE ENGINE
            const computeEngine = await $('#tab-item-1 > .tab-holder')
            await computeEngine.click()

            //Number of instances: 4
            const inputInstances = await $('.layout-row:nth-child(3) input#input_100')
            await inputInstances.setValue('4')

            // Locate the form element
            const form = await $('form[name=ComputeEngineForm]')

            //Operating System / Software set value
            const softwareSelect = await $('.layout-row:nth-child(5) #select_value_label_92')
            await softwareSelect.waitForDisplayed()
            await softwareSelect.waitForClickable()
            await softwareSelect.click()

            const softwareOption = await $('md-option#select_option_102 > .md-text')
            await softwareOption.waitForDisplayed();
            await softwareOption.waitForClickable()
            await softwareOption.click()

            //Provisioning model: Regular
            const provisioningModelSelect = await form.$('.layout-row:nth-child(6) #select_value_label_93')
            await provisioningModelSelect.waitForDisplayed()
            await provisioningModelSelect.waitForClickable()
            await provisioningModelSelect.click()

            const provisioningModelOption = await $('md-option#select_option_115 > .md-text')
            await provisioningModelOption.waitForDisplayed()
            await provisioningModelOption.waitForClickable()
            await provisioningModelOption.click()

            //Machine Family: General purpose 
            const machineFamilySelect = await form.$('.layout-row:nth-child(7) #select_value_label_94')
            await machineFamilySelect.waitForDisplayed()
            await machineFamilySelect.waitForClickable()
            await machineFamilySelect.click()

            const machineFamilyOption = await $('md-option#select_option_119 > .md-text')
            await machineFamilyOption.waitForDisplayed()
            await machineFamilyOption.waitForClickable()
            await machineFamilyOption.click()

            //Series: N1 
            const seriesSelect = await form.$('.layout-row:nth-child(8) #select_value_label_95')
            await seriesSelect.waitForDisplayed()
            await seriesSelect.waitForClickable()
            await seriesSelect.click()

            const seriesOption = await $('md-option#select_option_224 > .md-text')
            await seriesOption.waitForDisplayed()
            await seriesOption.waitForClickable()
            await seriesOption.click()

            //Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
            const machineTypeSelect = await form.$('.layout-row:nth-child(9) #select_value_label_96')
            await machineTypeSelect.waitForDisplayed()
            await machineTypeSelect.waitForClickable()
            await machineTypeSelect.click()

            const machineTypeOption = await $('md-option#select_option_474 > .md-text')
            await machineTypeOption.waitForDisplayed()
            await machineTypeOption.waitForClickable()
            await machineTypeOption.click()

            //Select “Add GPUs“
            const gpuCheckbox = await form.$('.layout-row:nth-child(15) md-checkbox > .md-container')
            await gpuCheckbox.waitForDisplayed()
            await gpuCheckbox.waitForClickable()
            await gpuCheckbox.click()

            //GPU type: NVIDIA Tesla V100
            const gpuTypeSelect = await form.$('.layout-row #select_510')
            await gpuTypeSelect.waitForDisplayed()
            await gpuTypeSelect.waitForClickable()
            await gpuTypeSelect.click()

            const gpuTypeOption = await $('md-option#select_option_517 > .md-text')
            await gpuTypeOption.waitForDisplayed()
            await gpuTypeOption.waitForClickable()
            await gpuTypeOption.click()

            //Number of GPUs: 1
            const gpuNumberSelect = await form.$('.layout-row #select_512')
            await gpuNumberSelect.waitForDisplayed()
            await gpuNumberSelect.waitForClickable()
            await gpuNumberSelect.click()

            const gpuNumberOption = await $('md-option#select_option_520 > .md-text')
            await gpuNumberOption.waitForDisplayed()
            await gpuNumberOption.waitForClickable()
            await gpuNumberOption.click()

            //Local SSD: 2x375 Gb
            const ssdLocalSelect = await form.$('.layout-row #select_469')
            await ssdLocalSelect.waitForDisplayed()
            await ssdLocalSelect.waitForClickable()
            await ssdLocalSelect.click()

            const ssdLocalOption = await $('md-option#select_option_495 > .md-text')
            await ssdLocalOption.waitForDisplayed()
            await ssdLocalOption.waitForClickable()
            await ssdLocalOption.click()

            //Datacenter location: Frankfurt (europe-west3)
            const locationSelect = await $('.layout-row #select_133')
            await locationSelect.waitForDisplayed()
            await locationSelect.waitForClickable()
            await locationSelect.click()

            const locationOption = await $('md-option#select_option_268 > .md-text')
            await locationOption.waitForDisplayed()
            await locationOption.waitForClickable()
            await locationOption.click()

            //Committed usage: 1 Year
            const usageSelect = await form.$('.layout-row #select_140')
            await usageSelect.waitForDisplayed()
            await usageSelect.waitForClickable()
            await usageSelect.click()

            const usageOption = await $('md-option#select_option_138 > .md-text')
            await usageOption.waitForDisplayed()
            await usageOption.waitForClickable()
            await usageOption.click()

            //Click 'Add to Estimate'
            const estimateButton = await form.$('.cpc-button.md-button.md-ink-ripple.md-primary.md-raised')
            await estimateButton.waitForDisplayed()
            await estimateButton.waitForClickable()
            await estimateButton.click()

            //There is a line “Total Estimated Cost: USD ${amount} per 1 month” 
            const totalEstimateTitle = $('#resultBlock .md-title > .ng-binding')
            await expect(totalEstimateTitle).toHaveText('Total Estimated Cost: USD 1,081.20 per 1 month')

            //Select 'EMAIL ESTIMATE'.
            const emailButton = $('.cpc-cart-buttons.layout-align-space-between-start button:nth-child(2)')
            await emailButton.waitForDisplayed()
            await emailButton.waitForClickable()
            await emailButton.click()

            //In a new tab, open https://yopmail.com/ or a similar temporary email–generating service.
            await browser.newWindow('https://yopmail.com/')

            //Generate a random email.
            const generateEmailLink = await $('.ycol3 #listeliens a:nth-child(1)')
            await generateEmailLink.waitForDisplayed()
            await generateEmailLink.waitForClickable()
            await generateEmailLink.click()

            //Copy the email generated in yopmail.com (or any other service). 
            //const clipboardButton = await $ ('.egenctn.flexcxy button#cprnd').click()
            const clipboardEmail = $('button#cprnd')
            await clipboardEmail.waitForDisplayed()
            await clipboardEmail.waitForClickable()
            await clipboardEmail.click()

            //Return to the calculator and enter the above email into the email field.
            await browser.switchWindow('https://cloud.google.com/products/calculator-legacy')

            //Find external iframes 
            await browser.switchToFrame(0)

            //Find internal iframes 
            await browser.switchToFrame(innerFrame)

            const emailDialog = await $('.md-dialog-container.ng-scope');
            await emailDialog.waitForDisplayed({ timeout: 6000 });

            //enter the above email into the email field.
            const emailInput = await $('div:nth-of-type(3) > .flex > input[name="description"]');
            await emailInput.waitForDisplayed({ timeout: 6000 })
            await emailInput.waitForClickable()
            await emailInput.click()
            await browser.keys([Key.Ctrl, 'v'])

            //Press 'SEND EMAIL'.
            const sendEmailButton = await $('md-dialog form .layout-row:nth-child(3) button:nth-child(2)')
            await sendEmailButton.waitForDisplayed({ timeout: 6000 })
            await sendEmailButton.scrollIntoView({ block: 'center', inline: 'center' });
            await sendEmailButton.waitForClickable()
            await sendEmailButton.click()

            //Wait for the cost estimate email
            await browser.switchWindow('mail')
            await browser.pause(10000)

            const emailInbox = await $('.nw > button:nth-of-type(2)')
            await emailInbox.waitForDisplayed({ timeout: 10000 })
            await emailInbox.waitForClickable()
            await emailInbox.click()

            const iframeElements = await $('iframe#ifmail')
            await browser.switchToFrame(iframeElements)

            //check that the emailed 'Total Estimated Monthly Cost' matches the result in the calculator.
            const totalCostEmail = await $('h2');
            await totalCostEmail.waitForDisplayed({ timeout: 6000 })
            await expect(totalCostEmail).toHaveText('Estimated Monthly Cost: USD 1,081.20');

        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }

    })
})

