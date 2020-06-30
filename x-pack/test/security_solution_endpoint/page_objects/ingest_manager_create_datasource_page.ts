/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { FtrProviderContext } from '../ftr_provider_context';

export function IngestManagerCreateDatasource({ getService, getPageObjects }: FtrProviderContext) {
  const testSubjects = getService('testSubjects');
  const find = getService('find');
  const pageObjects = getPageObjects(['common']);

  return {
    /**
     * Validates that the page shown is the Datasource Create Page
     */
    async ensureOnCreatePageOrFail() {
      await testSubjects.existOrFail('createDataSource_header');
    },

    /**
     * Finds and returns the Cancel button on the sticky bottom bar
     */
    async findCancelButton() {
      return await testSubjects.find('createDatasourceCancelButton');
    },

    /**
     * Finds and returns the Cancel back link at the top of the create page
     */
    async findBackLink() {
      return await testSubjects.find('createDataSource_cancelBackLink');
    },

    /**
     * Finds and returns the save button on the sticky bottom bar
     */
    async findDSaveButton() {
      return await testSubjects.find('createDatasourceSaveButton');
    },

    /**
     * Selects an agent configuration on the form
     * @param name
     * Visual name of the configuration. if one is not provided, the first agent
     * configuration on the list will be chosen
     */
    async selectAgentConfig(name?: string) {
      // if we have a name, then find the button with that `title` set.
      if (name) {
        await (
          await find.byCssSelector(`[data-test-subj="agentConfigItem"][title="${name}"]`)
        ).click();
      }
      // Else, just select the first agent configuration that is present
      else {
        await (await testSubjects.find('agentConfigItem')).click();
      }
    },

    /**
     * Set the name of the datasource on the input field
     * @param name
     */
    async setDatasourceName(name: string) {
      // Because of the bottom sticky bar, we need to scroll section 2 into view
      // so that `setValue()` enters the data on the input field.
      await testSubjects.scrollIntoView('dataCollectionSetupStep');
      await testSubjects.setValue('datasourceNameInput', name);
    },

    /**
     * Waits for the save Notification toast to be visible
     */
    async waitForSaveSuccessNotification() {
      await testSubjects.existOrFail('datasourceCreateSuccessToast');
    },

    /**
     * Validates that the page shown is the Datasource Edit Page
     */
    async ensureOnEditPageOrFail() {
      await testSubjects.existOrFail('editDataSource_header');
    },

    /**
     * Navigates to the Ingest Agent configuration Edit Datasource page
     */
    async navigateToAgentConfigEditDatasource(agentConfigId: string, datasourceId: string) {
      await pageObjects.common.navigateToApp('ingestManager', {
        hash: `/configs/${agentConfigId}/edit-datasource/${datasourceId}`,
      });
      await this.ensureOnEditPageOrFail();
    },
  };
}
