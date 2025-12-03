import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { musicVideos, pressArticles, featuredVideos } from '../config';

export const generatePortfolioPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Colors matching the theme
    const maroonColor = [62, 7, 3];
    const goldColor = [212, 175, 55];
    const cremeColor = [255, 240, 196];

    // Helper function to add a new page if needed
    const checkPageBreak = (requiredSpace) => {
        if (yPosition + requiredSpace > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;
            return true;
        }
        return false;
    };

    // Header with decorative line
    doc.setFillColor(...maroonColor);
    doc.rect(0, 0, pageWidth, 30, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Veena Srivani', pageWidth / 2, 15, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Saraswati Veena & Carnatic Vocal Artist', pageWidth / 2, 22, { align: 'center' });

    yPosition = 45;

    // About Section
    doc.setTextColor(...maroonColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('About', 20, yPosition);
    
    yPosition += 3;
    doc.setDrawColor(...goldColor);
    doc.setLineWidth(0.5);
    doc.line(20, yPosition, 60, yPosition);
    
    yPosition += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const aboutText = 'Bridging ancient tradition and modern expression through the divine Saraswati Veena and soulful vocals. Specializing in Carnatic classical music with performances of traditional compositions and devotional pieces.';
    const aboutLines = doc.splitTextToSize(aboutText, pageWidth - 40);
    doc.text(aboutLines, 20, yPosition);
    yPosition += aboutLines.length * 5 + 10;

    // Featured Performances Section
    if (featuredVideos && featuredVideos.length > 0) {
        checkPageBreak(40);
        doc.setTextColor(...maroonColor);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Featured Performances', 20, yPosition);
        
        yPosition += 3;
        doc.setDrawColor(...goldColor);
        doc.line(20, yPosition, 90, yPosition);
        
        yPosition += 10;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        
        featuredVideos.forEach((video, index) => {
            checkPageBreak(8);
            const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
            doc.setTextColor(27, 77, 92); // Peacock blue for links
            doc.textWithLink(`${index + 1}. ${video.title}`, 25, yPosition, { url: videoUrl });
            doc.setTextColor(60, 60, 60); // Reset color
            yPosition += 6;
        });
        
        yPosition += 5;
    }

    // Performance Repertoire - Dynamically from musicVideos
    checkPageBreak(40);
    doc.setTextColor(...maroonColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Performance Repertoire', 20, yPosition);
    
    yPosition += 3;
    doc.setDrawColor(...goldColor);
    doc.line(20, yPosition, 90, yPosition);
    
    yPosition += 10;

    // Count videos in each category
    const categories = [
        { key: 'veena', title: 'Veena Performances', videos: musicVideos.veena || [] },
        { key: 'vocal', title: 'Vocal Performances', videos: musicVideos.vocal || [] },
        { key: 'threeGenVeenaTrio', title: '3 Generation Veena Trio', videos: musicVideos.threeGenVeenaTrio || [] },
        { key: 'rtp', title: 'Raga Tanam Pallavi (RTP)', videos: musicVideos.rtp || [] },
        { key: 'otherForms', title: 'Other Forms', videos: musicVideos.otherForms || [] }
    ];

    categories.forEach(category => {
        if (category.videos.length > 0) {
            checkPageBreak(15 + (Math.min(category.videos.length, 5) * 6));
            
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...maroonColor);
            doc.setFontSize(11);
            doc.text(`${category.title} (${category.videos.length})`, 25, yPosition);
            yPosition += 7;
            
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(60, 60, 60);
            doc.setFontSize(9);
            
            // List up to 5 videos per category with links
            category.videos.slice(0, 5).forEach((video, index) => {
                checkPageBreak(6);
                const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
                doc.setTextColor(27, 77, 92); // Peacock blue for links
                doc.textWithLink(`  • ${video.title}`, 28, yPosition, { url: videoUrl });
                yPosition += 5;
            });
            doc.setTextColor(60, 60, 60); // Reset color
            
            if (category.videos.length > 5) {
                doc.setFont('helvetica', 'italic');
                doc.text(`  ... and ${category.videos.length - 5} more`, 28, yPosition);
                yPosition += 5;
                doc.setFont('helvetica', 'normal');
            }
            
            yPosition += 5;
        }
    });

    // Press & Media Section - Dynamically from pressArticles
    if (pressArticles && pressArticles.length > 0) {
        checkPageBreak(40);
        doc.setTextColor(...maroonColor);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Press & Media', 20, yPosition);
        
        yPosition += 3;
        doc.setDrawColor(...goldColor);
        doc.line(20, yPosition, 70, yPosition);
        
        yPosition += 10;
        
        pressArticles.forEach((article, index) => {
            checkPageBreak(25);
            
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(27, 77, 92); // Peacock blue for links
            doc.setFontSize(10);
            const titleLines = doc.splitTextToSize(article.title, pageWidth - 50);
            
            // Make title clickable if URL exists
            if (article.url) {
                doc.textWithLink(titleLines[0], 25, yPosition, { url: article.url });
                yPosition += 5;
                // Add remaining title lines if any
                for (let i = 1; i < titleLines.length; i++) {
                    doc.text(titleLines[i], 25, yPosition);
                    yPosition += 5;
                }
            } else {
                doc.setTextColor(...maroonColor);
                doc.text(titleLines, 25, yPosition);
                yPosition += titleLines.length * 5;
            }
            
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(100, 100, 100);
            doc.setFontSize(9);
            doc.text(`${article.publication} - ${article.date}`, 25, yPosition);
            yPosition += 5;
            
            if (article.excerpt) {
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(60, 60, 60);
                const excerptLines = doc.splitTextToSize(article.excerpt, pageWidth - 50);
                doc.text(excerptLines, 25, yPosition);
                yPosition += excerptLines.length * 4 + 5;
            }
            
            // Add "Read Article" link if URL exists
            if (article.url) {
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(8);
                doc.setTextColor(27, 77, 92);
                doc.textWithLink('Read full article', 25, yPosition, { url: article.url });
                yPosition += 8;
            } else {
                yPosition += 5;
            }
        });
    }

    // Services Section
    checkPageBreak(50);
    doc.setTextColor(...maroonColor);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Services', 20, yPosition);
    
    yPosition += 3;
    doc.setDrawColor(...goldColor);
    doc.line(20, yPosition, 55, yPosition);
    
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    
    const services = [
        '• Private lessons for Veena and Carnatic vocal music',
        '• Concert performances (solo and ensemble)',
        '• Available for cultural events, weddings, and private functions',
        '• Artistic collaborations welcome'
    ];
    
    services.forEach(service => {
        checkPageBreak(6);
        doc.text(service, 25, yPosition);
        yPosition += 6;
    });

    // Statistics Summary
    yPosition += 10;
    checkPageBreak(30);
    
    doc.setFillColor(...cremeColor);
    doc.roundedRect(20, yPosition - 5, pageWidth - 40, 25, 3, 3, 'F');
    
    doc.setTextColor(...maroonColor);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Portfolio Summary', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 7;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    
    const totalVideos = Object.values(musicVideos).reduce((sum, videos) => sum + (videos?.length || 0), 0);
    const totalPress = pressArticles?.length || 0;
    
    doc.text(`Total Performances: ${totalVideos} | Press Features: ${totalPress} | Featured Videos: ${featuredVideos?.length || 0}`, pageWidth / 2, yPosition, { align: 'center' });

    // Footer on last page
    const footerY = pageHeight - 15;
    doc.setFillColor(...maroonColor);
    doc.rect(0, footerY - 5, pageWidth, 20, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('For bookings and inquiries, please visit the contact page', pageWidth / 2, footerY, { align: 'center' });
    doc.setFontSize(8);
    doc.text('© Veena Srivani - Saraswati Veena & Carnatic Vocal Artist', pageWidth / 2, footerY + 5, { align: 'center' });

    // Save the PDF
    const timestamp = new Date().toISOString().split('T')[0];
    doc.save(`Veena_Srivani_Portfolio_${timestamp}.pdf`);
};
