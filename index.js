document.body.addEventListener('click', async function (event) {
    const selectors = ['.c-message_kit__blocks', '.message_kit_files', '.c-file_gallery'];

    if (selectors.some(selector => event.target.closest(selector))) {

        const parentGutter = event.target.closest('.c-message_kit__gutter');
        if (!parentGutter) {
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 1));

        const actionsContainer = parentGutter.nextElementSibling;
        if (!actionsContainer || !actionsContainer.classList.contains('c-message_actions__container')) {
            return;
        }

        const moreActionsButton = actionsContainer.querySelector('button[data-qa="more_message_actions"]');
        if (!moreActionsButton) {
            return;
        }

        moreActionsButton.click();

        await new Promise(resolve => setTimeout(resolve, 1));

        const messageActionsMenu = document.querySelector('.p-message_actions_menu');
        if (!messageActionsMenu) {
            return;
        }

        const deleteButton = messageActionsMenu.querySelector('button[data-qa="delete_message"]');
        if (!deleteButton) {
            return;
        }

        deleteButton.click();

        await new Promise(resolve => setTimeout(resolve, 1));

        const dialogContent = document.querySelector('.c-dialog__content');
        if (!dialogContent) {
            return;
        }

        const goButton = dialogContent.querySelector('button[data-qa="dialog_go"]');
        if (!goButton) {
            return;
        }

        goButton.click();
    }
});
