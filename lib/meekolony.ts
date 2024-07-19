export function calculateDayDifference(date: Date) {
    if (!date) {
        return "--";
    }

    const compareDate = new Date(date);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - compareDate.getTime();
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (dayDifference > 0) {
        return `${dayDifference}d`;
    } else {
        const hourDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        return `${hourDifference}h`;
    }
}

export function convertSolToPriceString(price: number) {
    if (!price) {
        return "--";
    }

    const priceString = (price / 1000000000).toFixed(3).toString();
    return priceString;
}

export function getMeekolonyIndexName(meekolonyName: string) {
    if (!meekolonyName) {
        return "--";
    }

    var meekolonyIndex = meekolonyName.substring(9);
    return meekolonyIndex;
}

export function getOwnerAbbreviation(owner: string) {
    if (!owner) {
        return "--";
    }

    var ownerAbbreviation = owner.substring(0, 5);
    return ownerAbbreviation;
}

export function getWalletImageUrl(walletId: string) {
    const baseUrl = 'https://img-cdn.magiceden.dev/rs:fill:250:0:0/plain/';
    const encodedBaseUrl = 'https%3A%2F%2Fapi.dicebear.com%2F7.x%2Fidenticon%2Fsvg%3F';
    const params = {
        backgroundType: 'gradientLinear',
        seed: walletId,
    };

    const queryString = new URLSearchParams(params).toString();
    const walletImageUrl = `${baseUrl}${encodedBaseUrl}${queryString}`;
    return walletImageUrl;
}

export function shortenWalletAdrress(walletAdress: string, startLength = 5, endLength = 3) {
    if (walletAdress.length <= startLength + endLength) {
        return walletAdress;
    }

    const start = walletAdress.slice(0, startLength);
    const end = walletAdress.slice(-endLength);
    return `${start}...${end}`;
}

export function getListPrice(price: number){
    const priceAfterCalculation = price / 1000000000;
}