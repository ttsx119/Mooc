function pageChange(count) {
    displayView(count);

    const _li       = jQuery('.pagination').find('li');
    const _previous = jQuery('.pagination').find('.previous');
    const _next     = jQuery('.pagination').find('.next');
    const pageNum   = Math.ceil(count / 10);

    initialState(_previous, _li, pageNum);

    _li.each(function() {
        jQuery(this).click(function() {
            const current = jQuery(this);

            if (current.hasClass('previous')) {
                visitPrevious(_li, _next, _previous);
            }

            if (!current.hasClass('previous') && !current.hasClass('next')) {
                current.addClass('active').siblings().removeClass('active');

                current.index() === 1 ? _previous.addClass('disabled') : _previous.removeClass('disabled');
                current.index() === _next.index() - 1 ? _next.addClass('disabled') : _next.removeClass('disabled');

                dataDisplay(Number.parseInt(current.text()) * 10);
            }

            if (current.hasClass('next')) {
                visitNext(_li, _next, _previous);
            }
        });
    });
}

function displayView(pageNum) {
    var pageHTML  = '';
    var pageArray = [];

    for (var i = 1; i <= Math.ceil(pageNum / 10); i++) {
        pageArray.push(i);
    }

    pageHTML += '<li class="previous">';
    pageHTML += '<a href="javascript:void(0)">Previous</a>';
    pageHTML += '</li>';

    pageArray.map(function(item) {
        pageHTML += '<li>';
        pageHTML += '<a href="javascript:void(0)">';
        pageHTML += item;
        pageHTML += '</a>';
        pageHTML += '</li>'; 
    });

    pageHTML += '<li class="next">';
    pageHTML += '<a href="javascript:void(0)">Next</a>';
    pageHTML += '</li>';

    $('.pagination').html(pageHTML);
}

function initialState(_previous, _li, pageNum) {
    _previous.addClass('disabled');

    pageNum < 5 ? _li.eq(1).addClass('active') : _li.eq(3).addClass('active');

    dataDisplay(10);
}

function visitPrevious(_li, _next, _previous) {
    const _currentIndex = jQuery('.pagination').find('.active').index();

    if (_currentIndex !== 1) {
        _li.eq(_currentIndex - 1).addClass('active').siblings().removeClass('active');

        dataDisplay(_li.eq(_currentIndex - 1).index() * 10);

        if (_next.hasClass('disabled')) {
            _next.removeClass('disabled');
        }

        if (_currentIndex === 2) {
            _previous.addClass('disabled');
        }
    }
}

function visitNext(_li, _next, _previous) {
    const _currentIndex = jQuery('.pagination').find('.active').index();

    if (_currentIndex !== _next.index() - 1) {
        _li.eq(_currentIndex + 1).addClass('active').siblings().removeClass('active');

        dataDisplay(_li.eq(_currentIndex + 1).index() * 10);

        if (_previous.hasClass('disabled')) {
            _previous.removeClass('disabled');
        }

        if (_currentIndex === _next.index() - 2) {
            _next.addClass('disabled');
        }
    }
}

function dataDisplay(index) {
    jQuery('table').find('tbody > tr').each(function() {
        const currentIndex = jQuery(this).index() + 1;

        if ((index - 9) <= currentIndex && currentIndex <= index) {
            jQuery(this).show();
        } else {
            jQuery(this).hide();
        }
    });

    pageDisplay();
}

function pageDisplay() {
    const _current = jQuery('.pagination').find('.active');
    const _li      = jQuery('.pagination').find('li');

    _li.each(function() {
        const current = jQuery(this);

        if (!current.hasClass('previous') && !current.hasClass('next')) {
            jQuery(this).hide();

            if (_current.index() - 2 > 0) {
                _li.eq(_current.index() - 2).show();
            }

            if (_current.index() - 1 > 0) {
                _li.eq(_current.index() - 1).show();
            }

            _current.show();

            if (_current.index() + 1 <= _li.length - 2) {
                _li.eq(_current.index() + 1).show();
            }

            if (_current.index() + 2 <= _li.length - 2) {
                _li.eq(_current.index() + 2).show();
            }
        }
    });
}