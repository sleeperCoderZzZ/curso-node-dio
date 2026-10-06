async function getBaseEmail(senderName: string) : Promise<string> {
    const base = `${senderName}, gostaria de te convidar para conhecer a nossa plataforma.`;

    return base;
}

export { getBaseEmail };