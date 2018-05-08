$(document).ready(function() {
    var userId = $('main').data('user-id')

    $('.add-campaign-button').click(function(event) {
        var parent = $(event.target).parent()
        var campaignId = parent.data('id')
        $.ajax(`http://localhost:8080/api/users/${userId}/campaigns/${campaignId}`, {
            method: 'POST',
            success: function (data, textStatus, jqXHR) {
                parent.remove()
            }
        })
    })

    $('.remove-campaign-button').click(function(event) {
        var parent = $(event.target).parent()
        var campaignId = parent.data('id')
        $.ajax(`http://localhost:8080/api/users/${userId}/campaigns/${campaignId}`, {
            method: 'DELETE',
            success: function (data, textStatus, jqXHR) {
                parent.remove()
            }
        })
    })
});